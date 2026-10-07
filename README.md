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

The workflow builds with `VITE_BASE` from the repository variable of the same name (set to `/`
for the live site; the fallback `/site/` is only for a repo without the variable, served at
`hulf-observatory.github.io/site/`). The repository variables `VITE_MAPS_URL`,
`VITE_TIMELINE_URL` and `VITE_DATA_URL` point the Layers / City Timeline / Data sources links
at the companion sites.

## Domain (hyderabad.urbanobservatory.in)

Live since 2026-10-08. How it is wired, in case it needs redoing or undoing:

- DNS (GoDaddy): four `A` records for `hyderabad` → `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153` (GitHub Pages). Before the move it was one `A` record
  to the Contabo server `217.216.78.26`; putting that back is the rollback.
- Repo: Settings → Pages → Custom domain `hyderabad.urbanobservatory.in`, Enforce HTTPS on;
  repository variable `VITE_BASE` = `/`. If the certificate stalls after a DNS change, remove
  and re-add the custom domain.
- The domain is verified for the `hulf-observatory` account (TXT record
  `_github-pages-challenge-hulf-observatory.hyderabad`), which covers every subdomain.

## Licence

MIT, see `LICENSE`. Content and data have their own attributions on the pages.
