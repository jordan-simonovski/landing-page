const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initPathEndpointDetails() {
  const details = document.querySelector(".path-endpoint");
  if (!details) return;

  document.addEventListener("click", (event) => {
    if (!details.open) return;
    if (details.contains(event.target)) return;
    details.removeAttribute("open");
  });
}

function init() {
  initPathEndpointDetails();

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
