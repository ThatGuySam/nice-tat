import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import { SITE_NAME, DESCRIPTION } from '../config';

/**
 * Generates RSS feed from all markdown pages.
 * Access at /rss.xml
 */
export async function GET(context: APIContext) {
  // Import all markdown pages
  const pages = import.meta.glob<{
    frontmatter?: {
      title?: string;
      description?: string;
      pubDate?: string;
    };
  }>('./**/*.md', { eager: true });

  // Filter and map pages to RSS items
  const items = Object.entries(pages)
    .filter(([path]) => {
      // Exclude index page from RSS
      return !path.includes('index.md');
    })
    .map(([path, page]) => {
      // Convert path to URL
      // e.g., "./contact.md" -> "/contact"
      const link = path
        .replace('./', '/')
        .replace('.md', '');

      // Extract title from path if not in frontmatter
      const filename = path
        .split('/')
        .pop()
        ?.replace('.md', '') || '';
      const title = page.frontmatter?.title
        || filename
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');

      return {
        title,
        link,
        description: page.frontmatter?.description
          || DESCRIPTION,
        pubDate: page.frontmatter?.pubDate
          ? new Date(page.frontmatter.pubDate)
          : new Date(),
      };
    });

  return rss({
    title: SITE_NAME,
    description: DESCRIPTION,
    site: context.site?.toString() || '',
    items,
  });
}
