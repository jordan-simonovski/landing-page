const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Looks: unveil on arrival, track the look in view ---------- */

function initLooks() {
  const looks = [...document.querySelectorAll(".look")];
  const railItems = new Map([...document.querySelectorAll(".rail li")].map((li) => [li.dataset.look, li]));

  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("motion");
    const unveil = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            unveil.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 }
    );
    looks.forEach((l) => unveil.observe(l));
  }

  // The look whose middle band is on screen is "current": it gets the accent in the rail and its edge strip.
  const setCurrent = (id) => {
    looks.forEach((l) => l.classList.toggle("is-current", l.id === id));
    railItems.forEach((li, key) => li.classList.toggle("is-current", key === id));
    document.body.classList.toggle("in-looks", Boolean(id));
  };

  if (!("IntersectionObserver" in window)) return;
  const visible = new Set();
  const band = new IntersectionObserver(
    (entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id);
      setCurrent(looks.find((l) => visible.has(l.id))?.id);
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  looks.forEach((l) => band.observe(l));
}

/* ---------- Activity: live GitHub contributions ---------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const nf = new Intl.NumberFormat("en-AU");
const dateFmt = new Intl.DateTimeFormat("en-AU", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

function placeholderDays() {
  return Array.from({ length: 371 }, () => ({ level: 0 }));
}

function renderCalendar(section, days, todayDate) {
  const grid = section.querySelector(".calendar__grid");
  const months = section.querySelector(".calendar__months");
  const frag = document.createDocumentFragment();

  // GitHub weeks start on Sunday; pad the first column so rows line up as weekdays.
  const firstDow = days[0]?.date ? new Date(days[0].date + "T00:00:00Z").getUTCDay() : 0;
  for (let i = 0; i < firstDow; i++) {
    const pad = document.createElement("i");
    pad.style.visibility = "hidden";
    frag.appendChild(pad);
  }
  for (const d of days) {
    const cell = document.createElement("i");
    cell.dataset.l = d.level;
    if (d.date) {
      cell.dataset.date = d.date;
      cell.dataset.count = d.count;
      if (d.date === todayDate) cell.className = "is-today";
    }
    frag.appendChild(cell);
  }
  grid.replaceChildren(frag);

  months.replaceChildren();
  let lastMonth = -1;
  let lastCol = -4;
  days.forEach((d, i) => {
    if (!d.date) return;
    const m = new Date(d.date + "T00:00:00Z").getUTCMonth();
    const col = Math.floor((i + firstDow) / 7);
    // skip a label that would collide with the previous one (the partial first month)
    if (m !== lastMonth && col < 51 && col - lastCol >= 3) {
      lastCol = col;
      const label = document.createElement("span");
      label.textContent = MONTHS[m];
      label.style.gridColumn = `${col + 1}`;
      months.appendChild(label);
    }
    lastMonth = m;
  });

  // keep the most recent weeks in view when the grid overflows on phones
  const scroller = section.querySelector(".calendar__scroll");
  scroller.scrollLeft = scroller.scrollWidth;
}

function rollNumber(el, target) {
  if (reduceMotion) {
    el.textContent = nf.format(target);
    return;
  }
  const start = performance.now();
  const duration = 1400;
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(2, -10 * t);
    el.textContent = nf.format(Math.round(target * (t === 1 ? 1 : eased)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initReadout(section) {
  const readout = section.querySelector(".calendar__readout");
  const grid = section.querySelector(".calendar__grid");
  grid.addEventListener("pointerover", (e) => {
    const cell = e.target.closest("i[data-date]");
    if (!cell) return;
    const n = Number(cell.dataset.count);
    readout.textContent = `${dateFmt.format(new Date(cell.dataset.date + "T00:00:00Z"))} · ${
      n === 0 ? "No contributions" : `${nf.format(n)} contribution${n === 1 ? "" : "s"}`
    }`;
  });
}

async function initActivity() {
  const section = document.querySelector(".activity");
  if (!section) return;
  renderCalendar(section, placeholderDays());
  initReadout(section);

  try {
    const res = await fetch("/api/contributions", { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.days)) throw new Error("Malformed response");

    const today = data.days[data.days.length - 1]?.date;
    renderCalendar(section, data.days, today);
    section.querySelector(".calendar__grid").setAttribute(
      "aria-label",
      `Daily GitHub contributions for the last year: ${nf.format(data.total)} in total, longest run ${data.longest} days.`
    );
    section.dataset.state = "ready";

    const startRoll = () =>
      section.querySelectorAll(".n").forEach((el) => rollNumber(el, Number(data[el.dataset.key]) || 0));
    if (reduceMotion || !("IntersectionObserver" in window)) return startRoll();
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        io.disconnect();
        startRoll();
      }
    }, { threshold: 0.4 });
    io.observe(section.querySelector(".activity__line"));
  } catch (err) {
    console.warn("Contributions unavailable:", err);
    section.dataset.state = "error";
  }
}

initLooks();
initActivity();
