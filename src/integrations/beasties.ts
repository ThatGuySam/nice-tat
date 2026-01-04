/**
 * Astro integration for beasties (critical CSS inlining)
 * Runs post-build to inline critical CSS and lazy-load rest
 * 
 * @see https://github.com/danielroe/beasties
 */
import type { AstroIntegration } from 'astro';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Beasties from 'beasties';

type PreloadStrategy =
  | 'swap'
  | 'swap-high'
  | 'swap-low'
  | 'media'
  | 'body'
  | 'js'
  | 'js-lazy';

interface BeastiesOptions {
  // Convert links to preloads that swap once loaded
  preload?: PreloadStrategy;
  // Inline critical font-face rules
  inlineFonts?: boolean;
  // Preload critical fonts
  preloadFonts?: boolean;
}

/**
 * Recursively find all HTML files in a directory
 */
async function findHtmlFiles(
  directory: string
): Promise<string[]> {
  const htmlFiles: string[] = [];
  const entries = await readdir(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      const nested = await findHtmlFiles(fullPath);
      htmlFiles.push(...nested);
    } else if (entry.name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }

  return htmlFiles;
}

/**
 * Creates an Astro integration that runs beasties
 * on all HTML files after the build completes
 */
export function beastiesIntegration(
  options: BeastiesOptions = {}
): AstroIntegration {
  return {
    name: 'beasties',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const distPath = fileURLToPath(dir);

        const beasties = new Beasties({
          path: distPath,
          // Inline all external stylesheets
          external: true,
          // Preload strategy (default: swap)
          preload: options.preload ?? 'swap',
          // Font handling
          inlineFonts: options.inlineFonts ?? false,
          preloadFonts: options.preloadFonts ?? true,
          // Prune unused CSS from lazy-loaded sheets
          pruneSource: false,
          // Merge inlined styles into single tag
          mergeStylesheets: true,
          // Always include these rules in critical CSS:
          // - Route announcer (screen-reader-only for View Transitions)
          // - Body font (Tailwind preflight override)
          allowRules: [
            '.astro-route-announcer',
            'body',
            'html',
          ],
        });

        const htmlFiles = await findHtmlFiles(distPath);
        logger.info(
          `Processing ${htmlFiles.length} HTML files...`
        );

        for (const htmlPath of htmlFiles) {
          const html = await readFile(htmlPath, 'utf-8');
          const processed = await beasties.process(html);
          await writeFile(htmlPath, processed);
        }

        logger.info('Critical CSS inlined successfully');
      },
    },
  };
}
