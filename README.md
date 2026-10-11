# Calling card

Myles Braithwaite's business card on the web: a single page with contact details, an [h-card](https://microformats.org/wiki/h-card) and a downloadable vCard.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com) and the [`@myles-garden/styles`](https://github.com/myles/myles-garden-styles) design tokens.

## Editing the card

The name, tagline, location, email and links live in `src/data/card.ts`. Both the home page and `/contact.vcf` read from it.

## Getting started

1. Run `npm install`.
2. Copy `.env.example` to `.env` and fill in the site's details.
3. Run `npm run dev` and open <http://localhost:4321>.

## Configuration

Site settings come from environment variables, read at build time:

| Variable                        | Default                 | Used for                          |
| ------------------------------- | ----------------------- | --------------------------------- |
| `CALLING_CARD_SITE_URL`         | `http://localhost:4321` | Astro's `site` and canonical URLs |
| `CALLING_CARD_SITE_TITLE`       | `calling-card`          | Default page title                |
| `CALLING_CARD_SITE_DESCRIPTION` | none                    | Default meta description          |

Everything here ends up in the built HTML, so don't put secrets in them.

## Scripts

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server                     |
| `npm run build`   | Build the site to `dist/`                |
| `npm run preview` | Preview the built site                   |
| `npm run check`   | Type-check Astro and TypeScript files    |
| `npm run lint`    | Lint with oxlint (`lint:fix` to fix)     |
| `npm run format`  | Check formatting (`format:write` to fix) |

## Licence

[MIT](LICENSE)
