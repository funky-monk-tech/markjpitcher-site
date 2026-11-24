# markjpitcher.com

Astro site for Dr. Mark Pitcher's mobile sports chiropractic practice. See CLAUDE.md for the full brief.

## Run it

    npm install
    npm run dev        # local preview at http://localhost:4321
    npm run build      # production site in dist/

## Before launch

1. Copy the Drive folder "markjpitcher-site/images" into public/images (file names must stay as they are).
2. Search the project for `<Todo` and resolve each item with Mark, then delete the Todo lines.
3. Push to GitHub and turn on GitHub Pages with the workflow in .github/workflows/deploy.yml.
4. Launch steps (Cloudflare DNS, 301 redirects, email routing, Search Console) are in CLAUDE.md.

## Where things live

- src/data/site.js: phone, areas served, review link, image list. Edit facts here.
- src/pages/: one file per page. Titles and search descriptions are at the top of each.
- src/layouts/Base.astro: header, footer, mobile Call/Text bar, schema markup.
- src/styles/global.css: colors and type.
- astro.config.mjs: redirects from the old Wix addresses.

Preview build (placeholders instead of photos, flat .html files): `PUBLIC_PREVIEW=1 npx astro build --outDir preview`
