import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Required for sitemap, canonical URLs, OG images
  site: 'https://nice-tat.samcarlton.workers.dev',
  integrations: [
    tailwind(),
    sitemap(),
  ]
});