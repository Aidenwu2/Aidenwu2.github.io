# Wanqiang Wu — Personal Academic Website

A self-contained, bilingual (English / 中文) static homepage. No build step, no
framework, no dependencies. Open it directly or host it anywhere that serves
static files.

## Files

```
personal-website/
├── index.html            # page skeleton + hero (works without JavaScript)
├── assets/
│   ├── styles.css        # all styling (light/dark, responsive, print)
│   ├── data.js           # ← edit this to update content (single source of truth)
│   ├── app.js            # rendering + interactions
│   ├── photo.jpg         # portrait
│   ├── CV_Wanqiang_Wu.pdf
│   └── CV_Wu_Wanqiang_zh.pdf
└── README.md
```

## Preview locally

Double-click `index.html`, or run a tiny server (better, so PDFs and fonts load
cleanly):

```bash
cd ~/Desktop/personal-website
python3 -m http.server 8000
# then open http://localhost:8000
```

## Edit the content

Every dynamic section (About, Publications, Grants … Contact) is rendered from
**`assets/data.js`** — that is the file to edit for almost everything. The one
exception is the hero name / tagline / roles, which are static bilingual HTML in
`index.html` (so the page still shows your identity with JavaScript disabled); edit
those three lines there.

To add a publication, copy an existing block in the `publications` array in
`data.js` and change the fields:

```js
{ year: 2026, date: { en: "Jun 2026", zh: "2026 年 6 月" },
  authors: "<b>Wu, W.</b>, &amp; Coauthor, A.",
  title: "Your paper title",
  venue: "Journal Name", detail: "12(3): 1–20",
  badges: ["SSCI · Q1", "Top 10%"],
  role: { en: "First author", zh: "第一作者" },
  lead: true,                       // optional: highlights the entry
  url: "https://doi.org/..." },
```

Names, dates, journals, citation counts, and ORCID/Scholar links all live in the
same file. Nothing else needs to change.

## Deploy

**GitHub Pages** (free, recommended)
1. Create a repo, e.g. `wanqiangwu.github.io`.
2. Put these files at the repo root and push.
3. Settings → Pages → Branch `main` / root. Live at `https://<user>.github.io`.

**Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, or connect the
repo. No build command, publish directory is the folder itself.

**A custom domain** — add a `CNAME` file with your domain and point a DNS record
at the host.

## Notes

- Language defaults to the visitor's browser language and can be toggled (EN / 中).
- Light/dark follows the system setting and can be toggled; both choices persist.
- The hero (name, title, photo, links) is in static HTML, so it shows even with
  JavaScript disabled; the publication list and other sections are rendered from
  `data.js`.
- Web fonts load from Google Fonts. To go fully offline, remove the `<link>` font
  tags in `index.html` — the CSS falls back to system serif/sans stacks.
