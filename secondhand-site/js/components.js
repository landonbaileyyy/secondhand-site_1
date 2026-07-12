/* ==========================================================================
   Reusable site components: header (nav) + footer
   Injected into every page via #site-header / #site-footer mount points so
   markup, links, and contact details only need to be updated in one place.
   ========================================================================== */

const SITE = {
  name: "Second Hand",
  tagline: "Upscale Resale & Consignment",
  phone: "(706) 808-0222",
  phoneHref: "tel:+17068080222",
  address1: "11560 US-27",
  address2: "Summerville Square Shopping Center",
  cityStateZip: "Summerville, GA 30747",
  facebook: "https://www.facebook.com/thesecondhandresale/",
  // Placeholder — add real Instagram handle when the store creates one.
  instagram: "#",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "Closed" },
    { day: "Wednesday", time: "Closed" },
    { day: "Thursday", time: "10 AM – 6 PM" },
    { day: "Friday", time: "10 AM – 6 PM" },
    { day: "Saturday", time: "10 AM – 5 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

const NAV_LINKS = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "about.html", label: "About", key: "about" },
  { href: "consignment.html", label: "Consignment", key: "consignment" },
  { href: "gallery.html", label: "Gallery", key: "gallery" },
  { href: "contact.html", label: "Contact", key: "contact" },
];

/* Hang-tag mark used as the logo icon (also the page's signature motif) */
function hangtagIconSVG(size = 22, color = "currentColor") {
  return `
  <svg class="tag-marker" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.5 3.5L11 3.2c-.5 0-1 .2-1.4.6L3.6 9.8a2 2 0 0 0 0 2.8l7.8 7.8a2 2 0 0 0 2.8 0l6.2-6.2c.4-.4.6-.9.6-1.4L20.5 3.5z"
      stroke="${color}" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="15.3" cy="8.7" r="1.4" stroke="${color}" stroke-width="1.6"/>
  </svg>`;
}

function renderHeader(activeKey) {
  const el = document.getElementById("site-header");
  if (!el) return;

  const links = NAV_LINKS.map(
    (link) => `
      <a href="${link.href}"
         class="nav-link text-sm tracking-wide text-[var(--color-ink)] ${link.key === activeKey ? "" : "text-[var(--color-ink-soft)]"}"
         ${link.key === activeKey ? 'aria-current="page"' : ""}>${link.label}</a>`
  ).join("");

  const mobileLinks = NAV_LINKS.map(
    (link) => `
      <a href="${link.href}"
         class="block py-3 border-b border-[var(--color-line)] text-base ${link.key === activeKey ? "font-semibold text-[var(--color-ink)]" : "text-[var(--color-ink-soft)]"}"
         ${link.key === activeKey ? 'aria-current="page"' : ""}>${link.label}</a>`
  ).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto px-5 sm:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-2.5 shrink-0" aria-label="${SITE.name} — home">
          <span class="hangtag text-[var(--color-blue-deep)]">${hangtagIconSVG(26)}</span>
          <span class="leading-tight">
            <span class="block font-display text-xl font-semibold text-[var(--color-ink)]">${SITE.name}</span>
            <span class="block text-[10px] tracking-[0.14em] uppercase text-[var(--color-ink-soft)]">${SITE.tagline}</span>
          </span>
        </a>

        <nav class="hidden md:flex items-center gap-8" aria-label="Primary">
          ${links}
        </nav>

        <div class="hidden md:flex items-center gap-4">
          <a href="${SITE.phoneHref}" class="text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-blue-deep)]">${SITE.phone}</a>
          <a href="contact.html" class="btn btn-primary">Visit Us</a>
        </div>

        <button id="menu-toggle" type="button"
          class="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-[var(--color-ink)]"
          aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
          <svg id="icon-open" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg id="icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="hidden">
            <line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>
          </svg>
        </button>
      </div>

      <div id="mobile-menu" class="md:hidden overflow-hidden max-h-0 opacity-0">
        <nav aria-label="Mobile" class="pb-4">
          ${mobileLinks}
          <div class="flex items-center gap-4 pt-4">
            <a href="${SITE.phoneHref}" class="text-sm font-semibold text-[var(--color-ink)]">${SITE.phone}</a>
          </div>
          <a href="contact.html" class="btn btn-primary w-full mt-4">Visit Us</a>
        </nav>
      </div>
    </div>
  `;

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    iconOpen.classList.toggle("hidden", !isOpen);
    iconClose.classList.toggle("hidden", isOpen);
    if (isOpen) {
      menu.style.maxHeight = "0px";
      menu.style.opacity = "0";
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
      menu.style.opacity = "1";
    }
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;

  const hoursRows = SITE.hours
    .map(
      (h) => `
      <div class="flex justify-between py-1.5 border-b border-white/10 last:border-0">
        <span class="text-white/70">${h.day}</span>
        <span class="${h.time === "Closed" ? "text-white/50" : "text-white font-medium"}">${h.time}</span>
      </div>`
    )
    .join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <div class="grid gap-12 md:grid-cols-4">
        <div class="md:col-span-2">
          <a href="index.html" class="flex items-center gap-2.5 mb-4">
            <span class="hangtag text-[var(--color-green)]">${hangtagIconSVG(24)}</span>
            <span class="font-display text-lg font-semibold text-white">${SITE.name}</span>
          </a>
          <p class="text-white/60 text-sm leading-relaxed max-w-sm">
            Quality secondhand clothing for men, women, boys, and girls —
            gently used, thoughtfully priced, and always changing.
            Serving Summerville and Chattooga County.
          </p>
          <div class="flex items-center gap-3 mt-6">
            <a href="${SITE.facebook}" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-ink)] transition-colors"
               aria-label="Second Hand on Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.2 3.63 14.9 3.5 13.4 3.5c-3 0-5.1 1.85-5.1 5.2v2.2H5.6V14h2.7v7h5.2z"/></svg>
            </a>
            <a href="${SITE.instagram}"
               class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-ink)] transition-colors"
               aria-label="Second Hand on Instagram (coming soon)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.7"/><circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white text-sm font-semibold tracking-wide uppercase mb-4">Explore</h3>
          <ul class="space-y-2.5 text-sm text-white/70">
            <li><a href="about.html" class="hover:text-white">About Us</a></li>
            <li><a href="consignment.html" class="hover:text-white">Consignment</a></li>
            <li><a href="gallery.html" class="hover:text-white">Gallery</a></li>
            <li><a href="contact.html" class="hover:text-white">Contact</a></li>
          </ul>
          <h3 class="text-white text-sm font-semibold tracking-wide uppercase mt-7 mb-4">Visit</h3>
          <p class="text-sm text-white/70 leading-relaxed">
            ${SITE.address1}<br>${SITE.address2}<br>${SITE.cityStateZip}
          </p>
          <a href="${SITE.phoneHref}" class="inline-block mt-3 text-sm font-medium text-white hover:text-[var(--color-green)]">${SITE.phone}</a>
        </div>

        <div>
          <h3 class="text-white text-sm font-semibold tracking-wide uppercase mb-4">Store Hours</h3>
          <div class="text-sm">${hoursRows}</div>
        </div>
      </div>

      <div class="tear-divider mt-12 mb-6" style="background-image: linear-gradient(to right, rgba(255,255,255,0.15) 60%, transparent 0%);"></div>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>&copy; <span id="year"></span> Second Hand Upscale Resale &amp; Consignment LLC. All rights reserved.</p>
        <p>Summerville, GA &middot; Chattooga County</p>
      </div>
    </div>
  `;

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
