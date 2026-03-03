# FleetBrain Sites

Static assets for fleetbrain.ai, deployed to GitHub Pages.

## Structure

```
fleetbrain-sites/
├── index.html                      # Live site — fleetbrain.ai
├── CNAME                           # GitHub Pages custom domain
├── assets/
│   ├── stan-favicon.svg
│   ├── stan-icon.svg
│   └── stan-peeking-banner.svg
├── diagrams/
│   ├── fleetbrain-logical-architecture.jsx
│   └── mater-detail.jsx
├── voice/                          # (planned) Voice PWA for SupaBrain
│   └── index.html
├── fleetbrain.ai/                  # DEPRECATED — redirect stub
└── stanleybot.fleetbrain.ai/       # DEPRECATED — redirect stub
```

## Sites

### fleetbrain.ai (this repo)
The parent brand site. Single self-contained HTML file with all CSS and JS inline. No frameworks, no build tools.

### stanleybot.fleetbrain.ai (separate repo)
The product site lives in [cslynch/stanleybot-fleetbrain-ai](https://github.com/cslynch/stanleybot-fleetbrain-ai). DNS CNAME points to that repo's GitHub Pages.

## Technical Details

- Self-contained HTML with inline CSS/JS
- Google Fonts (DM Sans + Space Grotesk + JetBrains Mono)
- Dark theme with FleetBrain brand palette
- Mobile-responsive with hamburger navigation
- Scroll animations via Intersection Observer
- Favicons embedded as SVG data URIs
- Open Graph and Twitter Card meta tags

## Deployment

GitHub Pages from `main` branch. DNS via GoDaddy pointing to GitHub Pages IPs.

## Deprecated Directories

- `fleetbrain.ai/` — earlier design iteration (Syne + Outfit fonts, different layout). Not served. Replaced by root `index.html`.
- `stanleybot.fleetbrain.ai/` — duplicate of content served from separate repo. Not served from this repo.

Both contain redirect stubs. Can be fully deleted when GitHub API supports directory removal or via local git.
