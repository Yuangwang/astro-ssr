// @ts-check
import { defineConfig } from 'astro/config';
import node from 'astro-test-wei';
import node1 from '@astrojs/node';
import cloudflare from '@astrojs/cloudflare';
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
