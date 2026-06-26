import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkCodeMeta } from './src/lib/remark-code-meta.ts';
import { CONFIG } from './src/data/config.ts';

const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  keepBackground: false,
};

export default defineConfig({
  site: 'https://yoniaflalo.github.io',
  base: '/', // IMPORTANT for user site repo

  output: 'static',

  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm, remarkMath, remarkCodeMeta],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions], rehypeKatex],
      syntaxHighlight: false,
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});