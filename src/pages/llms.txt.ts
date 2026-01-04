import type { APIContext } from 'astro';

import {
  SITE_NAME,
  DESCRIPTION,
  TAGLINE,
  FEATURES,
  TECH_STACK,
  LINKS,
} from '../config';

/**
 * Generates llms.txt for AI discoverability.
 * Auto-discovers pages and pulls metadata from config.
 */
export async function GET(_context: APIContext) {
  // Auto-discover all markdown pages
  const pages = import.meta.glob('./**/*.md', { eager: true });

  // Build page list, excluding special files
  const pageList = Object.keys(pages)
    .filter(path => !path.includes('/og/'))
    .map(path => {
      const url = path
        .replace('./', '/')
        .replace('.md', '')
        .replace('/index', '/');
      return `- ${url}`;
    })
    .sort()
    .join('\n');

  // Build features list
  const featuresList = FEATURES
    .map(feature => `- ${feature}`)
    .join('\n');

  // Build tech stack list
  const techStackList = TECH_STACK
    .map(tech => `- ${tech.name} (${tech.role})`)
    .join('\n');

  // Build links list
  const linksList = Object.entries(LINKS)
    .map(([name, url]) => `- ${name}: ${url}`)
    .join('\n');

  const content = `# ${SITE_NAME}

> ${DESCRIPTION}

## About

${TAGLINE}

## Features

${featuresList}

## Pages

${pageList}

## Tech Stack

${techStackList}

## Links

${linksList}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
