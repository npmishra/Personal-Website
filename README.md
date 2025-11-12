# mishranarayan.com.np

Next.js + Tailwind bilingual personal site. Static-export friendly (next export) and ready for Cloudflare Pages.

## Run locally
1. npm install
2. npm run dev

## Build & export (for static hosting)
npm run build
npm run export
# output in /out

## Deploy to Cloudflare Pages
- Connect GitHub repo
- Build command: `npm run build && npm run export`
- Output directory: `out`

## Notes
- Replace `public/IMG_0233.JPG` with your real photo.
- Update contact form endpoint (Formspree or Netlify forms).
- To add a blog post: add a markdown file in `content/` with front-matter (title, date, excerpt).
