/* ==========================================================================
   Site-wide interactions: contact form handling, FAQ accordion,
   gallery filter. Kept intentionally small — no frameworks, no build step.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Contact form (static demo — replace action with a real endpoint
     or form service such as Formspree when the site goes live) ---- */
  const form = document.getElementById("contact-form");
  if (form) {
    const status = document.getElementById("form-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const required = form.querySelectorAll("[required]");
      let valid = true;
      required.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.setAttribute("aria-invalid", "true");
        } else {
          field.removeAttribute("aria-invalid");
        }
      });

      const emailField = form.querySelector("#email");
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          valid = false;
          emailField.setAttribute("aria-invalid", "true");
        }
      }

      if (!valid) {
        status.textContent = "Please fill out all required fields with a valid email address.";
        status.className = "text-sm mt-4 text-red-600";
        status.focus();
        return;
      }

      form.reset();
      status.textContent = "Thanks! Your message has been sent — we'll get back to you soon.";
      status.className = "text-sm mt-4 text-[var(--color-green-deep)] font-medium";
      status.focus();
    });
  }

  /* ---- FAQ accordion (Consignment page) ---- */
  const faqButtons = document.querySelectorAll("[data-faq-trigger]");
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      if (panel) {
        panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
      }
      const icon = btn.querySelector("[data-faq-icon]");
      if (icon) icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(45deg)";
    });
  });

  /* ---- Gallery filter ---- */
  const filterButtons = document.querySelectorAll("[data-filter]");
  const galleryItems = document.querySelectorAll("[data-category]");
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        filterButtons.forEach((b) => {
          b.setAttribute("aria-pressed", "false");
          b.classList.remove("bg-[var(--color-ink)]", "text-white");
          b.classList.add("bg-white", "text-[var(--color-ink)]");
        });
        btn.setAttribute("aria-pressed", "true");
        btn.classList.add("bg-[var(--color-ink)]", "text-white");
        btn.classList.remove("bg-white", "text-[var(--color-ink)]");

        galleryItems.forEach((item) => {
          const match = filter === "all" || item.getAttribute("data-category") === filter;
          item.style.display = match ? "" : "none";
        });
      });
    });
  }
});
