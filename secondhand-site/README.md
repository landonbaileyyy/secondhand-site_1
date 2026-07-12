# Second Hand — Resale & Consignment Website

A clean, modern, static website for **Second Hand Upscale Resale & Consignment**
in Summerville, GA. Built with plain HTML, Tailwind CSS (CDN), and a small
amount of vanilla JavaScript — no build step required.

## Structure

```
secondhand-site/
├── index.html          Home — hero, categories, hours, map, CTA
├── about.html           About the store
├── consignment.html     How consigning works + FAQ
├── gallery.html          Filterable photo placeholder grid
├── contact.html          Contact form, phone, map, social links
├── css/
│   └── style.css         Design tokens (colors, fonts) + base/utility styles
├── js/
│   ├── components.js     Shared header & footer, injected on every page
│   └── main.js            Contact form validation, FAQ accordion, gallery filter
├── robots.txt
└── sitemap.xml
```

## Design system

- **Colors:** white, light gray (`--color-paper`), near-black ink, muted blue
  and soft sage green accents — defined once in `css/style.css` and mirrored
  in each page's Tailwind config block.
- **Type:** Fraunces (display headings) + Inter (body/UI), loaded from Google Fonts.
- **Signature motif:** a small rotated "hang-tag" icon used as a logo mark,
  bullet, and section accent — a nod to price tags / consignment tags.

## Updating content

- **Store info (name, phone, address, hours, social links):** edit the `SITE`
  object at the top of `js/components.js`. This updates the header and footer
  on every page automatically.
- **Navigation links:** edit `NAV_LINKS` in `js/components.js`.
- **Photos:** every image is currently a labeled placeholder tile
  (`.placeholder-tile` divs with an icon + caption). Replace with an `<img>`
  tag using the same class names/aspect ratios once real photography is available.
- **Contact form:** `contact.html`'s form currently only validates and shows a
  success message client-side (see `js/main.js`). Point the `<form>` at a
  real endpoint or a service like Formspree to receive live submissions.
- **Map:** both map embeds use a no-API-key Google Maps query embed. Swap the
  `src` URL if the address changes.

## Notes

- No frameworks or build tools — open any `.html` file directly in a browser,
  or serve the folder with any static file server.
- Accessible by default: semantic landmarks, skip link, visible focus states,
  `aria-current`/`aria-expanded` on interactive nav and FAQ elements, and
  `prefers-reduced-motion` support.
