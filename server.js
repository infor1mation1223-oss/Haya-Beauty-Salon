const path = require("path");
const fsp = require("fs/promises");
const express = require("express");
const ejs = require("ejs");
const site = require("./config/site");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const VIEWS = path.join(ROOT, "views");
const DATA_DIR = path.join(ROOT, "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

app.set("trust proxy", true);
app.set("view engine", "ejs");
app.set("views", VIEWS);

app.use(express.urlencoded({ extended: false, limit: "32kb" }));
app.use(express.json({ limit: "32kb" }));

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  next();
});

app.use(
  express.static(path.join(ROOT, "public"), {
    maxAge: process.env.NODE_ENV === "production" ? "7d" : 0,
    etag: true,
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html")) res.setHeader("Cache-Control", "no-cache");
    },
  })
);

function absoluteUrl(req, pathname = "/") {
  const envBase = (process.env.SITE_URL || "").replace(/\/$/, "");
  if (envBase) return `${envBase}${pathname}`;
  const proto = req.protocol;
  const host = req.get("host");
  return `${proto}://${host}${pathname}`;
}

function pageMeta(req, pageKey) {
  const meta = site.pages[pageKey] || site.pages.home;
  return {
    site,
    page: pageKey,
    title: meta.title,
    description: meta.description,
    canonical: absoluteUrl(req, req.path === "/" ? "/" : req.path),
    ogImage: absoluteUrl(req, "/images/og-share.jpg"),
    year: site.year,
  };
}

function renderPage(res, req, pageKey, extra = {}) {
  const locals = { ...pageMeta(req, pageKey), ...extra };
  const pageFile = path.join(VIEWS, "pages", `${pageKey}.ejs`);
  ejs.renderFile(pageFile, locals, (err, content) => {
    if (err) {
      console.error(err);
      res.status(500).send("The page could not be rendered.");
      return;
    }
    res.render("layouts/main", { ...locals, content });
  });
}

app.get("/", (req, res) => renderPage(res, req, "home"));
app.get("/about", (req, res) => renderPage(res, req, "about"));
app.get("/services", (req, res) => renderPage(res, req, "services"));
app.get("/gallery", (req, res) => renderPage(res, req, "gallery"));
app.get("/reviews", (req, res) => renderPage(res, req, "reviews"));
app.get("/contact", (req, res) => renderPage(res, req, "contact"));
app.get("/booking", (req, res) => renderPage(res, req, "booking"));

const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  { path: "/gallery", changefreq: "weekly", priority: "0.7" },
  { path: "/reviews", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/booking", changefreq: "monthly", priority: "0.9" },
];

app.get("/robots.txt", (req, res) => {
  const base = absoluteUrl(req, "");
  res.type("text/plain").send(
    `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${base}/sitemap.xml\n`
  );
});

app.get("/sitemap.xml", (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>${escapeXml(absoluteUrl(req, r.path))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  ).join("\n");
  res.type("application/xml").send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
});

app.get("/site.webmanifest", (req, res) => {
  res.json({
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F6F0E8",
    theme_color: "#3D1622",
    icons: [
      { src: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { src: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  });
});

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clean(value, max) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function isValidPhone(value) {
  const digits = String(value || "").replace(/[^\d+]/g, "");
  return /^(\+?92|0)?3\d{9}$/.test(digits) || /^(\+?\d{10,14})$/.test(digits);
}

function isValidDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return false;
  const yesterday = new Date();
  yesterday.setHours(0, 0, 0, 0);
  yesterday.setDate(yesterday.getDate() - 1);
  return d >= yesterday;
}

function isValidTime(value) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

const serviceIds = new Set(site.services.map((s) => s.id).concat(["other"]));

async function appendJson(file, record) {
  await fsp.mkdir(DATA_DIR, { recursive: true });
  let list = [];
  try {
    const raw = await fsp.readFile(file, "utf8");
    list = JSON.parse(raw);
    if (!Array.isArray(list)) list = [];
  } catch {
    list = [];
  }
  list.push(record);
  const tmp = `${file}.tmp`;
  await fsp.writeFile(tmp, JSON.stringify(list, null, 2));
  await fsp.rename(tmp, file);
}

async function postWebhook(url, payload) {
  if (!url) return;
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 4000);
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (err) {
    console.warn("Webhook skipped:", err.message);
  } finally {
    clearTimeout(t);
  }
}

const hits = new Map();
function rateLimit(key, limit = 8, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const row = hits.get(key) || [];
  const fresh = row.filter((t) => now - t < windowMs);
  fresh.push(now);
  hits.set(key, fresh);
  return fresh.length <= limit;
}

app.post("/api/booking", async (req, res) => {
  const ip = req.ip || "local";
  if (!rateLimit(`book:${ip}`)) {
    return res.status(429).json({
      ok: false,
      message: "Please wait a few minutes before sending another request.",
    });
  }

  const honeypot = clean(req.body.company, 40);
  if (honeypot) {
    return res.json({
      ok: true,
      message: "Thank you. Your appointment request has been received.",
    });
  }

  const name = clean(req.body.name, 80);
  const phone = clean(req.body.phone, 24);
  const date = clean(req.body.date, 12);
  const time = clean(req.body.time, 8);
  const service = clean(req.body.service, 40);
  const message = clean(req.body.message, 1000);

  const errors = {};
  if (name.length < 2) errors.name = "Please enter your full name.";
  if (!isValidPhone(phone)) errors.phone = "Please enter a valid phone number.";
  if (!isValidDate(date)) errors.date = "Please choose a preferred date.";
  if (!isValidTime(time)) errors.time = "Please choose a preferred time.";
  if (!serviceIds.has(service)) errors.service = "Please choose a service.";

  if (Object.keys(errors).length) {
    return res.status(422).json({
      ok: false,
      message: "Please check the highlighted fields.",
      errors,
    });
  }

  const record = {
    id: `bk_${Date.now().toString(36)}`,
    type: "booking",
    name,
    phone,
    date,
    time,
    service,
    message,
    status: "requested",
    createdAt: new Date().toISOString(),
  };

  try {
    await appendJson(BOOKINGS_FILE, record);
    await postWebhook(process.env.BOOKING_WEBHOOK_URL, record);
    return res.json({
      ok: true,
      id: record.id,
      message:
        "Your appointment request has been received. The salon will confirm the time with you. This is a request, not an automatic confirmation.",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      message: "The request could not be saved. Please call the salon instead.",
    });
  }
});

app.post("/api/contact", async (req, res) => {
  const ip = req.ip || "local";
  if (!rateLimit(`msg:${ip}`)) {
    return res.status(429).json({
      ok: false,
      message: "Please wait a few minutes before sending another message.",
    });
  }

  if (clean(req.body.company, 40)) {
    return res.json({ ok: true, message: "Thank you. Your message has been received." });
  }

  const name = clean(req.body.name, 80);
  const phone = clean(req.body.phone, 24);
  const email = clean(req.body.email, 120);
  const subject = clean(req.body.subject, 120);
  const message = clean(req.body.message, 1200);

  const errors = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isValidPhone(phone) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.phone = "Please share a phone number or a valid email.";
  }
  if (message.length < 8) errors.message = "Please write a short message.";

  if (Object.keys(errors).length) {
    return res.status(422).json({
      ok: false,
      message: "Please check the highlighted fields.",
      errors,
    });
  }

  const record = {
    id: `msg_${Date.now().toString(36)}`,
    type: "contact",
    name,
    phone,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    await appendJson(MESSAGES_FILE, record);
    await postWebhook(process.env.CONTACT_WEBHOOK_URL, record);
    return res.json({
      ok: true,
      message: "Thank you. Your message has been received. The salon will respond if a reply is needed.",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      ok: false,
      message: "The message could not be sent. Please call 0344 2782872.",
    });
  }
});

app.use((req, res) => {
  res.status(404);
  renderPage(res, req, "404", {
    title: "Page not found | Haya Beauty Salon",
    description: "The page you were looking for is not available.",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Haya Beauty Salon running on http://0.0.0.0:${PORT}`);
});
