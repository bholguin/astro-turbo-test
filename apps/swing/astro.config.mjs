// @ts-check
import { defineConfig } from 'astro/config';
import awsAmplify from 'astro-aws-amplify';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'always',
  integrations: [react()],
  output: 'server',
  adapter: awsAmplify(),
});
