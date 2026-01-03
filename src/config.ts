/**
 * Site-wide configuration.
 * Single source of truth for metadata used in:
 * - Layout SEO tags
 * - OG image generation
 * - RSS feed
 * - llms.txt
 * - robots.txt
 */

export const SITE_NAME = 'Nice Tat';

export const DESCRIPTION =
  'Astro Site Template inspired by Casey Neistat\'s ' +
  'ultra minimal personal site.';

export const TAGLINE =
  'A minimal, fast, static site template built with ' +
  'Astro. Great for a LinkInBio type site or a ' +
  'placeholder while you work on your personal site.';

export const FEATURES = [
  'Ultra minimal design',
  'Dark mode support',
  'Mobile responsive',
  'Fast static generation',
  'Easy to customize',
];

export const TECH_STACK = [
  { name: 'Astro', role: 'static site generator' },
  { name: 'Tailwind CSS', role: 'styling' },
  { name: 'JetBrains Mono', role: 'typography' },
];

export const LINKS = {
  github: 'https://github.com/ThatGuySam/nice-tat',
};
