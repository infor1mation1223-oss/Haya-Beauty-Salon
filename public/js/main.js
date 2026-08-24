(() => {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("menu-toggle");
  const panel = document.getElementById("mobile-panel");
  const body = document.body;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const focusable = () =>
    panel
      ? [...panel.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')].filter(
          (el) => !el.hasAttribute("disabled")
        )
      : [];

  const closeMenu = () => {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    body.classList.remove("menu-open");
  };

  const openMenu = () => {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    panel.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => panel.classList.add("is-open"));
    body.classList.add("menu-open");
    const first = focusable()[0];
    if (first) first.focus();
  };

  if (toggle && panel) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      if (open) closeMenu();
      else openMenu();
    });

    panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (e) => {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      if (e.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
      if (e.key === "Tab") {
        const items = focusable();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  if (reduce) body.classList.add("reduce-motion");
})();
