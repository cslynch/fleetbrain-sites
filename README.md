# fleetbrain-sites

Landing sites for FleetBrain and StanleyBot. Static HTML, no build tools, no dependencies.

## Structure

```
fleetbrain-sites/
├── fleetbrain.ai/
│   └── index.html          # Main FleetBrain landing page
├── stanleybot.fleetbrain.ai/
│   └── index.html          # StanleyBot product page
└── README.md
```

## Deployment

Each directory maps to its domain. Deploy to GitHub Pages, Cloudflare Pages, or any static host. Each `index.html` is fully self-contained — all CSS and JS inline, no external dependencies beyond Google Fonts.

## Sites

- **fleetbrain.ai** — Company site. Audience: business owners, investors, franchise operators. Covers the recursive knowledge loop, the Bodewell Doctrine, security architecture, and the operator model.
- **stanleybot.fleetbrain.ai** — Product site for Stan, the AI agent. Audience: service businesses (locksmiths, HVAC, electricians, etc.). Covers capabilities, cost, and the Jeff Fries / RapidKey Locksmith case study.
