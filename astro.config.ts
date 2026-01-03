import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Required for sitemap, canonical URLs, OG images
  site: 'https://nice-tat.pages.dev',
  integrations: [
    tailwind(),
    sitemap(),
  ]
});