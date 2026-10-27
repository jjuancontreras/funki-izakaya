# Funki Izakaya

**Live: [funki-izakaya.vercel.app](https://funki-izakaya.vercel.app)**

The website for Funki Izakaya, a Japanese restaurant group in Metro Manila. It
was a paid freelance project.

## Why

The restaurant's social pages kept getting the same questions: *What time are
you open? What's on the menu? Where are you?* The site answers all three in one
place, which cuts repeat customer-service messages and gives the brand a proper
online home.

## What's in it

- **Menu browser:** the full menu, by category, with item descriptions
- **Locations:** a card per branch with hours, address and map link
- **About** and **Contact** (with a validated contact form)
- Mobile-first, with scroll animations and parallax imagery

All content (menu, branches, hours) lives in one `content.json`, so it can be
updated without touching components.

## Quality

The build went through a review pass covering content accuracy against the
client's real menu and hours, accessibility, colour tokens, deprecated APIs,
image optimisation and form validation. Pushes to `main` auto-deploy to Vercel.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Vercel

```bash
npm install
npm run dev   # http://localhost:3000
```
