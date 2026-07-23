# JD Print Studio — Product Catalogue

A lightweight, static product catalogue for **JD Print Studio**, a custom 3D printing business. It showcases products across three categories — Speedcubing, Coffee, and Varios (miscellaneous) — as photo cards with a name, description, and price, and lets customers reach out directly via WhatsApp, Instagram, or email.

**Live site:** https://jdsolano02.github.io/jd-print-studio/

## Features

- Category filtering (All / Speedcubing / Coffee / Varios) with instant client-side rendering
- Products sorted alphabetically within each category automatically
- One-click ordering via WhatsApp (pre-filled message with product name and price), plus Instagram and email links
- Graceful placeholder cards (icon + initials) for products that don't have a photo yet — no broken image icons
- Fully responsive layout, custom brand color palette
- No build step — plain HTML/CSS/JS, deployable as-is to any static host

## Tech stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (via CDN, JIT mode — no build pipeline required)
- Vanilla JavaScript (no framework, no dependencies)
- Hosted on [GitHub Pages](https://pages.github.com/)

## Project structure

```
.
├── index.html              # Page markup, Tailwind config (brand colors), layout
├── js/
│   ├── products.js         # Contact info + product catalogue data
│   └── main.js              # Rendering, filtering, and sorting logic
└── images/
    ├── logo/                # Logo, mascot artwork, and favicons
    └── products/            # Product photos
```

## Editing the catalogue

All content lives in [`js/products.js`](js/products.js) — no HTML editing required.

### Contact info

```js
const CONTACT = {
  whatsapp: "50684131406",     // country code + number, no "+" or spaces
  instagram: "JD_PrintStudio", // without "@"
  email: "jdsolano03@gmail.com",
};
```

### Adding a product

Copy an existing block inside the `PRODUCTS` array and adjust the fields:

```js
{
  id: "unique-id",              // unique slug, used internally
  name: "Product Name",
  category: "speedcubing",      // "speedcubing" | "coffee" | "varios"
  price: 2000,                  // CRC, no formatting
  description: "Short description shown on the card.",
  image: "images/products/unique-id.jpeg",
},
```

Products don't need to be added in any particular order — they're sorted alphabetically within their category automatically at render time.

### Product photos

Drop the photo into `images/products/` with the filename referenced in `image`. If the file isn't there yet, the card automatically falls back to a styled placeholder (category icon + initials) instead of a broken image — so you can add products ahead of having final photography.

## Running locally

No build tools or dependencies needed. Serve the folder with any static file server, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The site is deployed via **GitHub Pages** from the `master` branch root. Any push to `master` automatically republishes the live site — no CI configuration required.
