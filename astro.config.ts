import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const DEFAULT_SITE = 'https://nice-tat.samcarlton.workers.dev';

/**
 * Get site URL from hosting provider env vars.
 * Checks Cloudflare, Netlify, Vercel in order,
 * then falls back to default domain.
 */
function getSiteUrl(): string {
  // Cloudflare Pages (includes https://)
  if (process.env.CF_PAGES_URL) {
    return process.env.CF_PAGES_URL;
  }

  // Netlify (includes https://)
  if (process.env.URL) {
    return process.env.URL;
  }

  // Vercel (NO protocol - must add https://)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Fallback for local dev and unknown hosts
  return DEFAULT_SITE;
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Required for sitemap, canonical URLs, OG images
  site: getSiteUrl(),
  integrations: [
    tailwind(),
    sitemap(),
  ]
});