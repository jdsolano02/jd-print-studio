# JD Print Studio — Product Catalogue

A lightweight, static product catalogue for **JD Print Studio**, a custom 3D printing business. It showcases products across categories — Coffee, Speedcubing, TCG, and Varios (miscellaneous) — as photo cards with a name, description, and price, and lets customers reach out directly via WhatsApp, Instagram, or email.

**Live site:** https://jdprintstudio.shop/

## Features

- Category filtering (All / Coffee / Speedcubing / TCG / Varios), plus multi-select sub-category tag filters within each category
- Products sorted alphabetically within each category automatically
- One-click ordering via WhatsApp (pre-filled message with product name and price), plus Instagram and email links
- Graceful placeholder cards (icon + initials) for products that don't have a photo yet — no broken image icons
- Fully responsive layout, custom brand color palette
- No build step — plain HTML/CSS/JS, deployable as-is to any static host

## Tech stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (via CDN, JIT mode — no build pipeline required)
- Vanilla JavaScript (no framework, no dependencies)
- Hosted on [Railway](https://railway.app/) (auto-detected as a static site via Railpack + Caddy)

## Project structure

```
.
├── index.html              # Page markup, Tailwind config (brand colors), layout
├── js/
│   ├── products.js         # Contact info + product catalogue data
│   └── main.js              # Rendering, filtering, and sorting logic
└── images/
    ├── logo/                # Logo, mascot artwork, and favicons
    └── products/            # Product photos, one sub-folder per category
        ├── coffee/
        ├── speedcubing/
        ├── tcg/
        └── varios/
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
  category: "speedcubing",      // "speedcubing" | "coffee" | "tcg" | "varios"
  subcategories: [],            // optional tags, see SUBCATEGORIES in js/main.js
  price: 2000,                  // CRC, no formatting
  description: "Short description shown on the card.",
  image: "images/products/speedcubing/unique-id.jpeg",
},
```

Products don't need to be added in any particular order — they're sorted alphabetically within their category automatically at render time.

### Product photos

Each category has its own sub-folder under `images/products/` (`coffee/`, `speedcubing/`, `tcg/`, `varios/`). Drop the photo into the sub-folder matching the product's `category`, using the filename referenced in `image`. If the file isn't there yet, the card automatically falls back to a styled placeholder (category icon + initials) instead of a broken image — so you can add products ahead of having final photography.

## Running locally

No build tools or dependencies needed. Serve the folder with any static file server, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The site is deployed via **Railway**, connected to the `master` branch, and served on the custom domain **jdprintstudio.shop**. Railway auto-detects it as a static site (no `package.json`) and serves it with Caddy — any push to `master` automatically triggers a redeploy, no CI configuration required.
