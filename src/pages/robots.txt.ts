import type { APIContext } from 'astro';

/**
 * Generates robots.txt dynamically.
 * Uses Astro.site for sitemap URL.
 */
export async function GET(context: APIContext) {
  const siteUrl = context.site?.toString().replace(/\/$/, '')
    || 'https://example.com';

  const content = `# robots.txt for Nice Tat

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${siteUrl}/sitemap-index.xml

# AI Crawlers - explicitly allow for discoverability
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
