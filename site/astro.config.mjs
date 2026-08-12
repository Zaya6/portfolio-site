import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.isaiahg.work',
  integrations: [mdx()],
  markdown: {
    // Use our own theme styling for code blocks (no Shiki inline styles)
    syntaxHighlight: false,
  },
});
