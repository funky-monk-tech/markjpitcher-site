import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const preview = process.env.PUBLIC_PREVIEW === '1';

// Old Wix addresses -> new pages. GitHub Pages serves these as instant
// redirect pages; Cloudflare rules will turn them into true 301s at launch.
const oldPosts = [
  'post/2018/03/01/dr-mark-interviewed-in-glow-magazine',
  'post/2018/01/06/sacroiliac-joint-pain',
  'post/2017/12/29/good-morning-vail-low-back-pain-myths',
  'post/2017/12/04/vail-health-a-leg-up-without-pain',
  'post/2017/11/22/neck-and-back-pain',
  'post/2017/11/21/back-mechanic',
  'post/2017/11/20/article-in-vail-beaver-creek-magazine',
  'post/2017/11/20/foam-rolling',
  'post/2016/11/10/dr-mark-in-skimagcom',
  'post/2016/05/31/rethink-and-reset-your-exercise-routine',
  'post/2016/05/24/connective-tissue-and-why-its-important',
  'post/2016/05/20/are-you-still-stretching-your-it-band',
  'post/2016/05/13/improving-functional-movements-for-performance-and-health',
  'post/2016/05/09/simple-breathing-exercise-can-restore-normal-pattern',
  'post/2013/02/07/vail-chiropractor-travels-to-taipei-with-dance-troupe',
];

const redirects = preview ? {} : {
  '/treatment-info': '/treatments/',
  '/teaching': '/about/',
  '/whereisdrmark': '/',
  '/blog-1': '/press/',
  ...Object.fromEntries(oldPosts.map((p) => ['/' + p, '/press/'])),
};

export default defineConfig({
  site: 'https://www.markjpitcher.com',
  base: process.env.SITE_BASE || undefined,
  trailingSlash: preview ? 'ignore' : 'always',
  build: { format: preview ? 'file' : 'directory' },
  redirects,
  integrations: preview ? [] : [sitemap()],
});
