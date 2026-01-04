import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Custom domain - used for production builds
const DEFAULT_SITE = 'https://nicetat.samcarlton.com';

/**
 * Get site URL from hosting provider env vars.
 * Priority:
 * 1. Explicit SITE_URL (set in hosting dashboard)
 * 2. Cloudflare Workers production branch
 * 3. Cloudflare Pages production branch
 * 4. Cloudflare Pages preview URL
 * 5. Netlify URL
 * 6. Vercel URL
 * 7. Default (custom domain)
 */
function getSiteUrl(): string {
  // 1. Explicit SITE_URL always wins (any provider)
  if (process.env.SITE_URL) {
    return process.env.SITE_URL;
  }

  // 2. Cloudflare Workers - use custom domain for main
  if (process.env.WORKERS_CI_BRANCH === 'main') {
    return DEFAULT_SITE;
  }

  // 3. Cloudflare Pages - use custom domain for main
  if (process.env.CF_PAGES_BRANCH === 'main') {
    return DEFAULT_SITE;
  }

  // 4. Cloudflare Pages preview deployments
  if (process.env.CF_PAGES_URL) {
    return process.env.CF_PAGES_URL;
  }

  // 5. Netlify (includes https://)
  if (process.env.URL) {
    return process.env.URL;
  }

  // 6. Vercel (NO protocol - must add https://)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 7. Fallback for local dev and unknown hosts
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