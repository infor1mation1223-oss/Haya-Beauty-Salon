# Haya Beauty Salon

Premium multi-page website for **Haya Beauty Salon** in Baldia Town, Karachi.

Built with **HTML, CSS, JavaScript, and Node.js** — custom-designed CSS (no Bootstrap, no Tailwind).

## Run

```bash
npm install
npm start
```

Open `http://localhost:3000`.

Optional environment variables are listed in `.env.example`.

## Deploy on Vercel

This project is ready to import from GitHub. No frontend build step.

1. Push the repo to GitHub.
2. In Vercel: **Add New Project** → import this repository.
3. Framework Preset: **Other**.
4. Build Command: leave empty.
5. Output Directory: leave empty.
6. Install Command: `npm install`.
7. Deploy.

`vercel.json` sends every request to the Express app in `api/index.js`. Templates and images are bundled with the function.

After deploy, set `SITE_URL` to your live domain (example: `https://haya-beauty-salon.vercel.app`) so canonical tags and the sitemap use the correct host.

Booking files cannot persist on Vercel’s filesystem. Set `BOOKING_WEBHOOK_URL` / `CONTACT_WEBHOOK_URL` if you want requests forwarded to email, WhatsApp, or a database. Guests can always call or WhatsApp **0344 2782872**.

---

## 1. Tech stack

- **Node.js + Express** — server, routes, booking/contact APIs
- **EJS** — shared layout, header, footer
- **Custom CSS** — design tokens, components, page layouts, motion
- **Vanilla JavaScript** — navigation, scroll reveals, gallery lightbox, form validation
- **No frontend framework**

## 2. Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/gallery` | Gallery |
| `/reviews` | Reviews |
| `/contact` | Contact |
| `/booking` | Booking / Appointment |

Also: `/sitemap.xml`, `/robots.txt`, `/site.webmanifest`, JSON-LD on every page.

## 3. Main reusable pieces

- `views/layouts/main.ejs` — document shell, SEO tags
- `views/partials/header.ejs` — sticky header + mobile menu
- `views/partials/footer.ejs`
- `views/partials/mobile-bar.ejs` — mobile Call / Book bar
- `views/partials/cta.ejs` — booking band
- `views/partials/jsonld.ejs` — BeautySalon schema
- Service cards, gallery masonry, forms, map embed

## 4. Animation system

Custom CSS + Intersection Observer (`public/js/animations.js`).

- Hero load sequence (rise / image reveal)
- Scroll fade-up, image clip reveal, staggered cards
- Button sheen, card lift, image zoom
- Lightbox and mobile-menu motion
- `prefers-reduced-motion` disables non-essential animation

## 5. SEO

- Unique title + meta description per page
- Canonical, Open Graph, Twitter cards
- Semantic headings
- `robots.txt` + generated `sitemap.xml`
- LocalBusiness / BeautySalon JSON-LD with the real name, phone, address, and 4.7 / 6 rating only

## 6. How to edit business information

Edit **`config/site.js`**.

That file holds the name, phone, address, YouTube URL, rating, review count, navigation, service list, gallery captions, hours placeholders, and page metadata.

## 7. How to replace images

Put files in:

- `public/images/` — hero, about, textures, social share
- `public/images/services/` — service cards
- `public/images/gallery/` — gallery

Then update paths / alt text in `config/site.js`.  
`public/images/og-share.jpg` is the social preview.  
`public/images/logo-mark.png` is the header mark.

## 8. How to connect the booking form later

The form already `POST`s JSON to `/api/booking` and stores requests in `data/bookings.json`.

To send bookings to a backend, WhatsApp business API, email worker, or database:

1. Set `BOOKING_WEBHOOK_URL` in the environment. Each valid request is also POSTed there as JSON.
2. Or replace the `appendJson` call in `server.js` with your database / email code.
3. Contact form works the same way via `/api/contact` and `CONTACT_WEBHOOK_URL`.

The success screen always describes a **request**, not a confirmed booking.

Contact form: `/api/contact`.
