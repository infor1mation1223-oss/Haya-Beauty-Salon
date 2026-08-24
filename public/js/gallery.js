(() => {
  const root = document.querySelector("[data-gallery]");
  if (!root) return;

  const items = [...root.querySelectorAll(".masonry-item")];
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  const filters = document.querySelectorAll("[data-gallery-filter]");

  let active = [...items];
  let index = 0;
  let lastFocus = null;

  const visibleItems = () =>
    items.filter((el) => el.style.display !== "none");

  const openAt = (i) => {
    active = visibleItems();
    if (!active.length) return;
    index = (i + active.length) % active.length;
    const fig = active[index];
    const img = fig.querySelector("img");
    if (!img) return;

    if (lightbox && image) {
      lastFocus = document.activeElement;
      image.src = img.currentSrc || img.src;
      image.alt = img.alt || "";
      if (caption) caption.textContent = img.alt || "";
      lightbox.hidden = false;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
      const closeBtn = lightbox.querySelector("[data-lightbox='close']");
      if (closeBtn) closeBtn.focus();
    } else {
      window.location.href = "/gallery";
    }
  };

  const close = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (image) image.removeAttribute("src");
    if (lastFocus) lastFocus.focus();
  };

  const trap = (e) => {
    if (!lightbox || !lightbox.classList.contains("is-open") || e.key !== "Tab") return;
    const list = [...lightbox.querySelectorAll("button")];
    if (!list.length) return;
    const first = list[0];
    const last = list[list.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const step = (dir) => openAt(index + dir);

  items.forEach((fig) => {
    const go = () => {
      const vis = visibleItems();
      openAt(vis.indexOf(fig));
    };
    fig.addEventListener("click", go);
    fig.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    lightbox.querySelectorAll("[data-lightbox]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const act = btn.getAttribute("data-lightbox");
        if (act === "close") close();
        if (act === "prev") step(-1);
        if (act === "next") step(1);
      });
    });
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
      trap(e);
    });
  }

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const key = btn.getAttribute("data-gallery-filter");
      items.forEach((fig) => {
        const show = key === "All" || fig.dataset.category === key;
        fig.style.display = show ? "" : "none";
      });
    });
  });
})();
