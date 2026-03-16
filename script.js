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
  initMetrics();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

function initMetrics() {
  const uptimeEl = document.getElementById("metric-uptime");
  const spansEl = document.getElementById("metric-spans");
  const noiseEl = document.getElementById("metric-noise");

  if (!uptimeEl || !spansEl || !noiseEl || prefersReducedMotion.matches) {
    return;
  }

  const noiseStates = ["low", "stable", "quiet", "contained"];
  let spanValue = 4.2;
  let noiseIndex = 0;

  window.setInterval(() => {
    spanValue += 0.09 + Math.random() * 0.04;
    uptimeEl.textContent = `${(99.95 + Math.random() * 0.04).toFixed(2)}%`;
    spansEl.textContent = `${spanValue.toFixed(2)}M`;
    noiseEl.textContent = noiseStates[noiseIndex % noiseStates.length];
    noiseIndex += 1;
  }, 2200);
}
