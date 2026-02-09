# FleetBrain Sites

Two single-page landing sites for FleetBrain, deployed to GitHub Pages.

## Structure

```
fleetbrain-sites/
├── fleetbrain.ai/
│   └── index.html          # Parent brand — fleetbrain.ai
├── stanleybot.fleetbrain.ai/
│   └── index.html          # Product site — stanleybot.fleetbrain.ai
└── README.md
```

## Sites

### fleetbrain.ai
The parent brand site. Audience: business owners, investors, franchise operators, enterprise decision-makers, potential operator recruits. Covers the recursive knowledge loop, the Bodewell Doctrine, case studies, security architecture, and the operator model.

### stanleybot.fleetbrain.ai
The product site for StanleyBot (Stan). Audience: small/mid-market service businesses — locksmiths, HVAC, concrete, staffing, plumbers, electricians, property management. Practical voice, real examples, transparent about mistakes.

## Technical Details

- Each site is one self-contained HTML file with all CSS and JS inline
- No frameworks, no build tools, no dependencies
- Google Fonts (Syne + Outfit) are the only external loads
- Dark theme with FleetBrain brand palette
- Mobile-responsive with hamburger navigation
- Scroll animations via Intersection Observer
- Favicons embedded as SVG data URIs
- Open Graph and Twitter Card meta tags included

## Deployment

Deploy to GitHub Pages. DNS records point from GoDaddy to GitHub Pages IPs, with CNAME for the subdomain.
