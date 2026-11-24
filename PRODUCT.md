# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Fellow builders (engineers, tinkerers, people who also ship side projects) landing on jordansimonov.ski/portfolio, usually from a link on Bluesky, GitHub, a talk or the blog. They want to see what Jordan makes and poke at it. Credibility for hiring is secondary; personality comes first.

## Product Purpose

A personal site for Jordan Simonovski, an observability engineer. The portfolio page shows off things he has shipped (apps in the wild and open source tooling) and how active he is in open source. Success: a visitor remembers the page, clicks through to at least one project, and leaves knowing Jordan builds a lot and builds for fun.

## Positioning

An observability engineer whose side projects are mostly about observability, made playful: a factory game about logs/metrics/traces, coverage tooling for Helm, Grafana panels for ClickHouse, an outage news ticker. The work and the person share one obsession.

## Operating Context

Static site on Vercel (plain HTML/CSS/JS, no build step). Vercel Web Analytics on the home page. Home page (`/`) links to CV, blog, portfolio, talks, socials. Portfolio lives at `/portfolio/`.

## Capabilities and Constraints

- The Lookbook design covers both `/` and `/portfolio/`; CV, blog and talks are separate sites.
- OSS activity graph is fed live by a Vercel serverless function querying GitHub GraphQL with a `GITHUB_TOKEN` env var (user to add the token).
- GitHub handle: `jordan-simonovski`. 4,140 contributions in the last year (as of 2026-11-24).

## Brand Commitments

- Name: Jordan Simonovski, domain jordansimonov.ski. Favicon `js-favicon.svg`.
- Voice: dry, casual, a bit irreverent ("A Codenames clone, but shitpostier.", "Built to scratch an itch, then left running.").

## Evidence on Hand

Featured (most recent, noteworthy):
- **Obsorio** — https://obsor.io — "A factory game about observability: carry logs, metrics and traces into storage while the company grows until it breaks." Pixel-art browser game, landscape only. OG image: https://obsor.io/og.png
- **PaperWing** — https://paperwing.io (source github.com/paperwingio/paperwing) — "The open web, read your way: news, Lemmy communities, Bluesky and Hacker News, organised by topic. Free, and yours." PWA, no accounts or tracking, Apache 2.0. Mascot Pip the paper owl. OG image: https://paperwing.io/og.png
- **Helmcov** — https://github.com/ClickHouse/helmcov — Helm unit test coverage analysis. Code now lives in the ClickHouse GitHub org.

Also shipped (existing portfolio content): Plug or Pump (plugorpump.app), Rays2ROI (rays2roi.com), Keknames (keknames.up.railway.app), Gaggimate Wrapped (gaggimate-wrapped.vercel.app), Plusplus, Helmver, Heatmap Panel (repo `event-deltas`), plus other public repos such as ONN macOS outage ticker, chgraph, ha-otelcol.

No testimonials, star counts worth quoting, or user numbers exist; do not invent any.

## Product Principles

1. Show the work, don't describe it: every project links to the real thing.
2. Fun is the point; the page should feel like one of Jordan's projects.
3. Activity is proof: the contribution graph is real data, never decorative.
4. Keep it static and cheap to run.
