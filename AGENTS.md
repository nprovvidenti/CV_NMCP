# AGENTS.md

## Cursor Cloud specific instructions

This repository is a static website (a single-page interactive CV) with no build step, package manager, or automated tests. It consists of plain `index.html`, `style.css`, and `script.js`, plus image/PDF assets. External libraries (Chart.js, Google Fonts) are loaded from CDNs, so internet access is required for the radar chart and web fonts to render.

### Running the site (development)

There are no dependencies to install. Serve the folder with any static HTTP server, for example:

```
python3 -m http.server 8001
```

Then open `http://localhost:8001/`. Do not open `index.html` via the `file://` protocol — relative asset paths and the CDN scripts behave best over HTTP.

Notes:
- There is no hot reload; refresh the browser after editing files.
- The "Minhas Skills" radar chart and its legend are built dynamically in `script.js` using Chart.js (loaded from `cdn.jsdelivr.net`). If the chart is blank, check network access to the CDN.
- Deployment is handled by Vercel (`vercel.json`); it serves the repo root as static files with `cleanUrls` enabled. There is no `installCommand` or `buildCommand`.
- There is no lint or test tooling configured in this repo.
