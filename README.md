# Hyderabad Urban Observatory — main site

The portal site of the Hyderabad Urban Observatory: home page with the HMDA terrain,
Thematic Areas, data sources, stories (Hyderabad's waterscapes, GHMC ward census,
Kancha Gachibowli change analysis), About and Disclaimer. React 19 + Vite + Ant Design,
no backend. Built by GitHub Actions and published to GitHub Pages.

The maps live in a separate app (the Spatial Data Repository viewer), the archive maps in
the City Timeline app; this site only links to and embeds them.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ (postbuild copies index.html to 404.html for SPA deep links)
```

## Environment variables (build time)

| Variable            | Default                                        | Purpose |
|---------------------|------------------------------------------------|---------|
| `VITE_BASE`         | `/`                                            | Path the site is served from (`/site/` on the project Pages URL). |
| `VITE_MAPS_URL`     | `https://maps.hyderabad.urbanobservatory.in`      | Spatial Data Repository (map viewer): Layers button, story embeds. |
| `VITE_TIMELINE_URL` | `https://timeline.hyderabad.urbanobservatory.in/` | City Timeline links. |

Example: `VITE_MAPS_URL=http://127.0.0.1:8124 npm run dev` tests the map embeds against a
local viewer.

## Deploys

Every push to `main` (or a manual run of the workflow) runs `.github/workflows/pages.yml`:
`npm ci`, `npm run build`, upload `dist/`, deploy to Pages. The repository's Pages source
must be set to **GitHub Actions** (Settings → Pages → Build and deployment → Source).

The workflow builds with `VITE_BASE` from the repository variable of the same name, falling
back to `/site/`, so the site works at `https://hulf-observatory.github.io/site/`. The
optional repository variables `VITE_MAPS_URL` and `VITE_TIMELINE_URL` are passed through.

## Moving to the apex domain (hyderabad.urbanobservatory.in)

1. Settings → Pages → Custom domain: `hyderabad.urbanobservatory.in` (this commits a
   `CNAME` file; keep it, or add `public/CNAME` with the same content). Tick
   "Enforce HTTPS" once the certificate is issued.
2. Settings → Secrets and variables → Actions → Variables: set `VITE_BASE` to `/`.
3. DNS (owner's step, at the DNS provider): for a subdomain like
   `hyderabad.urbanobservatory.in` a `CNAME` record pointing at `hulf-observatory.github.io`
   is the simplest. If the domain is used as an apex instead, use `A` records to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (and optionally `AAAA` records to `2606:50c0:8000::153` … `8003::153`).
4. Re-run the workflow (or push) so the build uses the new base path.

## Licence

MIT, see `LICENSE`. Content and data have their own attributions on the pages.
