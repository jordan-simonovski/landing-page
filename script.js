const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function init() {
  if (prefersReducedMotion.matches) {
    document.body.classList.add("is-ready");
    return;
  }

  window.requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
