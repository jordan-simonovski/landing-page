---
name: Simonovski Collection
description: Side projects shown deadpan as a fashion house's season collection.
colors:
  bone: "#f2eee6"
  paper: "#e9e4d9"
  stone: "#d6cfc1"
  ink: "#12110f"
  ink-soft: "#57524a"
  persimmon: "#b8431e"
  persimmon-on-ink: "#ff8f63"
  calendar-1: "#cfc7b6"
  calendar-2: "#9a9282"
  calendar-3: "#534e46"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, serif"
    fontSize: "clamp(4.5rem, 14.5vw, 15.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  headline:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, serif"
    fontSize: "clamp(2.75rem, 7vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 96"
  title:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, serif"
    fontSize: "clamp(1.9rem, 3.2vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 72"
  statement:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, serif"
    fontSize: "clamp(1.4rem, 2.6vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 1.3
    fontVariation: "'opsz' 48"
  item:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.1
    fontVariation: "'opsz' 48"
  wordmark:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, serif"
    fontSize: "1.6rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.32em"
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.15vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.2em"
  label-small:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.2em"
  data:
    fontFamily: "Martian Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.14em"
rounded:
  none: "0px"
spacing:
  hairline: "1px"
  calendar-gap: "3px"
  stack: "1.5rem"
  actions: "1.75rem"
  row: "1.25rem"
  group: "4rem"
  mast: "3.5rem"
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(4rem, 12vh, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.9rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.persimmon}"
    textColor: "{colors.bone}"
  link-quiet:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.6rem 0"
  link-quiet-hover:
    textColor: "{colors.persimmon}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label-small}"
    padding: "0.75rem 0"
  edge-strip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.data}"
    padding: "0.55rem 1.25rem"
  edge-strip-current:
    textColor: "{colors.persimmon-on-ink}"
  look-rail:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink-soft}"
    padding: "0.9rem 0.75rem"
  look-rail-current:
    textColor: "{colors.persimmon}"
  archive-row:
    textColor: "{colors.ink}"
    typography: "{typography.item}"
    padding: "1.25rem 0"
  close-link:
    textColor: "{colors.ink}"
    padding: "1.5rem 1.25rem 1.25rem"
  close-link-hover:
    textColor: "{colors.persimmon}"
  calendar-cell-empty:
    backgroundColor: "transparent"
    size: "clamp(10px, calc((100vw - var(--gutter) * 2) / 53 - 3px), 24px)"
  calendar-cell-1:
    backgroundColor: "{colors.calendar-1}"
  calendar-cell-2:
    backgroundColor: "{colors.calendar-2}"
  calendar-cell-3:
    backgroundColor: "{colors.calendar-3}"
  calendar-cell-4:
    backgroundColor: "{colors.ink}"
---

# Design System: Simonovski Collection

Scope: this system governs the whole site at jordansimonov.ski: `/portfolio` (`portfolio/index.html`, `portfolio/portfolio.css`, `portfolio/portfolio.js`) and the home page (`/`, root `index.html` + `home.css`). `portfolio/portfolio.css` holds the shared tokens and components; `home.css` adds only the cover (plus `close--home`, a spacing tweak to the closing footer). The CV, journal and talks subdomains are separate sites and are not covered.

## Overview

**Creative North Star: "The Season Collection"**

Side projects are presented deadpan, the way a fashion house shows a season: each piece is a full-bleed "look" with its name set monumentally in a high-contrast didone, a plate of real project imagery running to the edge, and a strip of provenance data along its foot. The joke only works if the execution is straight, so the material is quiet and expensive: a warm bone ground, near-black ink, stone hairlines, and generous matte negative space. Imagery from the projects themselves is the only texture.

Density is low and scale contrast is extreme. Monumental serif display sits against a spare, tracked-out grotesk for labels and a mono reserved for data (edge codes, code samples, the calendar). One seasonal accent, persimmon, marks whatever is current: the look in view, the hovered link, today's calendar cell.

The page rejects the developer-portfolio default: no headline over a grid of equal project cards, and no green contribution heatmap.

**Key Characteristics:**
- Bone ground, ink type, stone hairline rules; flat and square throughout.
- Didone display at monumental scale, grotesk labels in tracked uppercase, mono only for data.
- Each look is a split section: a copy column and a full-bleed plate, with the project name spanning both.
- One accent at a time, and it follows what is current.
- One authored motion: plates unveil upward as each look arrives.

## Colors

A warm, near-monochrome paper-and-ink palette with a single persimmon accent.

### Primary
- **Persimmon** (`persimmon`): the one seasonal accent. Marks the current state: the active rail number, primary button hover, quiet-link and archive hover, close-link hover, today's calendar cell ring, and the focus outline.
- **Persimmon on Ink** (`persimmon-on-ink`): the same accent lifted for legibility on ink; used only on "Look 0n" in an ink edge strip: on a look's strip when that look is current, and on a home cover plate's strip on hover or focus.

### Neutral
- **Bone** (`bone`): page ground, masthead, rail tab, and type reversed out of ink. Also the theme colour.
- **Paper** (`paper`): the calendar's loading "breathe" target; a half-step below bone.
- **Stone** (`stone`): every hairline rule (masthead foot, look and section borders, archive rows, close dividers) and the outline of empty calendar cells.
- **Ink** (`ink`): all primary text, the primary button, the edge strip, plate fallback, selection background, and the top calendar level.
- **Soft Ink** (`ink-soft`): secondary text: notes, archive descriptions, group headings, calendar month labels and readout, the italic "Collection 2026" line, rail numbers at rest.

### Calendar levels
- **Calendar 1 to 3** (`calendar-1`, `calendar-2`, `calendar-3`), then **Ink** for level 4: a stone-to-ink ramp for contribution density. Level 0 is an empty cell with a stone hairline.

### Named Rules
**The One Accent Rule.** Persimmon appears only on what is current or hovered, never as decoration or a fill at rest. There is never a second accent on screen.

**The Borrowed Colour Rule.** A look's plate takes its project's own colours (Obsorio's night ground `#0b0f14`, PaperWing's red field `#d62f35`, Helmcov's highlighter `#faff69`), set per look. When a plate's own colour would clash with persimmon, the current-state marks borrow the project's colour in its place (PaperWing: rail `#c0262c`, edge strip `#ff8a8e`, name on plate `#fffdf5`); it replaces the accent, never sits beside it. These are look-local values, not system tokens.

## Typography

**Display Font:** Bodoni Moda (with Didot, Bodoni 72, serif), variable optical size
**Body Font:** Hanken Grotesk (with Helvetica Neue, Arial, sans-serif), weights 400 and 500
**Label/Mono Font:** Martian Mono (with ui-monospace, Menlo, monospace), weight 400, width 87.5

**Character:** A fashion-house didone at poster scale, played against a plain, tracked-out grotesk. The mono is a third voice reserved for machine data, like edge codes printed on film stock.

### Hierarchy
- **Display** (`display`): the look name, one word set enormous and low across the section. Nothing else uses this size.
- **Headline** (`headline`): section titles (Activity, Archive) and the closing CV / Journal / Talks links.
- **Title** (`title`): the collection title in the first look, with a second line in italic soft ink.
- **Statement** (`statement`): the activity sentence; figures inside it are italic with lining, tabular numerals.
- **Item** (`item`): archive project names.
- **Wordmark** (`wordmark`): the centred SIMONOVSKI mark in the masthead, uppercase, with its trailing tracking cancelled by a matching negative margin. Drops to 1.25rem under 720px.
- **Body** (`body`) / **Body lead** (`body-lead`): running copy; look descriptions cap at 38ch, the activity line at 34ch.
- **Label** (`label`, `label-small`): uppercase, 0.2em tracking. Buttons and quiet links use 0.75rem; nav, archive group headings and small close links use 0.6875rem.
- **Data** (`data`): uppercase mono for the edge strip (0.14em), archive destinations and plate captions (0.08em), and calendar months (0.625rem, 0.1em). The readout and rail are mono too, but not uppercase.

### Named Rules
**The Optical Size Rule.** Bodoni Moda is always set at the optical size matching its use: 96 for display and headline, 72 for title, 48 for statement and item. Never use the low-contrast small-opsz cut at large sizes.

**The Italic Is The Hover Rule.** Serif links signal hover and focus by switching to italic (archive names, close links), not by underline or weight.

**The Mono Is Data Rule.** Martian Mono only carries data: provenance codes, URLs as destinations, code samples, dates and counts. Never prose or headings.

## Layout

- **Masthead:** sticky, `mast` tall (5.25rem under 720px), a three-column grid (`1fr auto 1fr`): section anchors left, wordmark centred, outbound links right. Under 720px the section anchors hide and the bar stacks.
- **Look:** each look is at least the viewport minus the masthead, split 38/62 between copy and plate; `look--flip` mirrors it to 62/38. The copy column reserves room at its foot for the name (`name-size * 0.95 + 4rem`). The first look adds a title row above the copy.
- **Name split:** the name spans the full section width, positioned 1.4rem from the bottom and padded by the gutter (plus 2.25rem on the rail side).
- **Gutter:** `gutter` on all horizontal edges; sections pad vertically by `section`.
- **Archive:** a 4/8 two-column grid; the headline sticks beside the list. Rows are a three-column grid (name / description / destination).
- **Close:** headline-scale links flex-wrap in cells of at least 18rem, divided by stone hairlines under an ink top rule; small label links below.
- **Calendar:** 53 columns by 7 rows of square cells with a 3px gap, sized to fit the gutter-bounded width (10px to 24px), scrolling horizontally if needed.
- **Breakpoints:** 960px (looks stack to plate, edge strip, copy; plate becomes 4:5, max 78svh; rail hides; archive goes single-column) and 720px (masthead stacks, close links go full width).

## Elevation & Depth

Flat. There are no drop shadows. Depth comes only from layering: the name sits over the plate, the edge strip over the plate's foot, the bone rail tab over whatever it crosses. `box-shadow` appears only as a stroke: the 1px inset stone outline on empty calendar cells and the 2px persimmon ring on today's cell.

### Named Rules
**The Matte Rule.** Surfaces never lift. Separation is a 1px stone hairline or a change of ground, never a shadow, blur or gradient.

## Shapes

Square everywhere (`rounded.none`): buttons, strips, plates, calendar cells. Lines are 1px hairlines in stone, with ink reserved for the close section's top rule and bone for the dividers between cover plates. Underlines are drawn as 1px rules: the quiet link's offset underline (0.6em) and the nav's underline that grows from the left on hover.

## Components

### Buttons
Black, rectangular, tracked uppercase.
- **Shape:** square corners, 3.25rem minimum height.
- **Primary:** ink ground, bone label, padded `0 1.9rem`.
- **Hover:** the ground turns persimmon over 300ms on the house ease.
- **Focus:** a 2px persimmon outline offset 3px (global).

### Quiet link
The secondary action next to the button: label type with a 1px underline offset 0.6em, no ground. Hover turns it persimmon.

### Navigation
Masthead links in small label type with no underline at rest. On hover or focus, a 1px rule grows from the left (`scaleX` 0 to 1, 400ms). The wordmark links home.

### Look plate
A full-bleed figure with an ink fallback ground. Images cover the plate; a type plate (Helmcov) sets a mono code sample on a coloured ground with an uppercase mono caption. With JS and motion allowed, each plate unveils upward (`clip-path` from `inset(100% 0 0 0)`, 1400ms) while its content settles from 1.08 to 1 scale (1800ms).

### Name split
The look name is drawn twice from one `data-name` and clipped at the plate edge: ink over the copy column, the look's `--on-plate` colour over the plate. The clip is 62/38 (mirrored on flipped looks). Under 960px it becomes a single copy in the plate colour, set over the plate's foot.

### Edge strip
Provenance data along the foot of the plate: ink ground, bone uppercase mono, items 1.75rem apart. The first item ("Look 0n") turns `persimmon-on-ink` when that look is current. Under 960px it sits as its own row between plate and copy.

### Look rail
A fixed bone tab on the far-left edge listing look numbers (01 to 03) in mono soft ink. It fades in only while looks are in view; the current number turns persimmon and grows a 1.5rem hairline tick. Hidden under 960px.

### Calendar
Square cells on a 3px gap, empty cells outlined in stone, levels 1 to 4 stepping from `calendar-1` to ink, today ringed in persimmon. While loading, cells breathe toward paper (1.6s, alternating). A mono readout below names the hovered day. The activity sentence's figures count up over 1400ms when the data lands.

### Archive row
A full-row link between stone hairlines: serif project name, soft-ink description, uppercase mono destination aligned right. Hover italicises the name and turns the destination persimmon. Grouped under small uppercase soft-ink headings.

### Cover (home)
The home page's first viewport: the same 38/62 split as a look. The copy column holds the name a step below headline (`clamp(2.75rem, 5.2vw, 5.5rem)`, headline's opsz 96 and -0.03em tracking) with an italic soft-ink role line, then the intro, button and quiet link at its foot. The plate column is a triptych of the three looks, one linked plate each (`/portfolio/#<look>`), divided by 1px bone rules, in the project's borrowed colours, with a serif name and an ink edge strip ("Look 0n" and the project's kind; the kind hides at 1200px and below so the strips stay one line and the names level). Hover scales the plate content to 1.05, italicises the name, and turns "Look 0n" `persimmon-on-ink`. On load the plates unveil upward left to right (CSS-only, 120ms stagger), so the resting state needs no JS. Under 960px the cover stacks and the names turn up the plate spines (`writing-mode: vertical-rl`). Below the cover, an Index uses the archive row for Collection, CV, Journal and Talks.

### Close links
Headline-scale serif links (CV, Journal, Talks) in hairline-divided cells. Hover and focus turn them italic and persimmon. Below them, small label links with offset underlines.

## Do's and Don'ts

### Do:
- **Do** ease every transition with `cubic-bezier(0.16, 1, 0.3, 1)`: 300ms for colour, 400 to 600ms for rules and state, 1400 to 1800ms for the plate unveil.
- **Do** give every look a plate of the project's real imagery or real output, running to the edge.
- **Do** set each look's name as a single word at `display` size, crossing the copy/plate boundary.
- **Do** honour reduced motion: everything visible, no unveil, no count-up, transitions cut to 1ms.
- **Do** keep content visible without JS: the portfolio's motion is opt-in via the `motion` class, and the cover's CSS-only unveil animates from a fully visible resting state.

### Don't:
- **Don't** put persimmon on anything at rest, or add a second accent beside it (The One Accent Rule).
- **Don't** use rounded corners, drop shadows, gradients or blur.
- **Don't** set prose or headings in the mono.
- **Don't** present projects as a grid of equal cards, or colour the calendar green.
