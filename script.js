const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const root = document.documentElement;

let rafPending = false;
let pointerX = window.innerWidth / 2;
let pointerY = window.innerHeight / 2;

function setPointerGlow() {
  root.style.setProperty("--pointer-x", `${pointerX}px`);
  root.style.setProperty("--pointer-y", `${pointerY}px`);
  rafPending = false;
}

function onPointerMove(event) {
  pointerX = event.clientX;
  pointerY = event.clientY;

  if (!rafPending) {
    rafPending = true;
    window.requestAnimationFrame(setPointerGlow);
  }
}

function initEntrance() {
  if (prefersReducedMotion.matches) {
    document.body.classList.add("is-ready");
    return;
  }

  window.requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
}

function initMotion() {
  if (prefersReducedMotion.matches) {
    return;
  }

  window.addEventListener("pointermove", onPointerMove, { passive: true });
}

function init() {
  initEntrance();
  initMotion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
