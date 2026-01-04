import { OGImageRoute } from 'astro-og-canvas';

import { SITE_NAME, DESCRIPTION } from '../../config';

// Import all markdown pages for OG image generation
const pages = import.meta.glob<{
  frontmatter?: {
    title?: string;
    description?: string;
  };
}>('/src/pages/**/*.md', { eager: true });

/**
 * Converts a file path to a human-readable title.
 * e.g., "/src/pages/how-to-use.md" -> "How To Use"
 */
function pathToTitle(path: string): string {
  const filename = path
    .split('/')
    .pop()
    ?.replace('.md', '') || '';

  // Handle index specially
  if (filename === 'index') {
    return SITE_NAME;
  }

  // Convert kebab-case to Title Case
  return filename
    .split('-')
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
}

// OGImageRoute returns a Promise, so we await it
const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages: pages,

  getImageOptions: (path, page) => {
    const title = page.frontmatter?.title
      || pathToTitle(path);
    const description = page.frontmatter?.description
      || DESCRIPTION;

    return {
      title,
      description,
      // Dark background matching site theme
      bgGradient: [[19, 21, 26]],
      // Border accent
      border: {
        color: [136, 58, 234],
        width: 20,
        side: 'inline-start',
      },
      font: {
        title: {
          size: 72,
          weight: 'Medium',
          color: [255, 255, 255],
        },
        description: {
          size: 32,
          color: [156, 163, 175],
        },
      },
      // Padding around content
      padding: 80,
    };
  },
});

export { getStaticPaths, GET };
