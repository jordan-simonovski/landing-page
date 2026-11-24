---
version: 1
slug: "portfolio-index-html"
primary_target: "portfolio/index.html"
related_targets: []
---

# /portfolio surface brief

Scope: `portfolio/index.html` (own stylesheet + script). Visitor mode: Experience. Home page untouched.

Audience: fellow builders arriving from Bluesky/GitHub/talks/blog. Job: see what Jordan ships, click into a project, feel his OSS activity. Constraints: static HTML on Vercel; live contribution data via `/api/contributions` (needs `GITHUB_TOKEN`); CV and blog must stay discoverable (user steer, round 1).

## Direction contract

THESIS: Side projects presented deadpan as a fashion house's season collection: each project a full-bleed "look" with monumental type. Refuses the dev-portfolio default of a headline over a grid of equal project cards and a green heatmap.

OWN-WORLD: Bone ground (#f2eee6), ink (#12110f), stone rules, one seasonal accent (persimmon) reserved for the look in view. Monumental high-contrast didone display (Bodoni Moda) against a spare grotesk for labels, mono only for edge-code data. Hairline rules, matte negative space, full-bleed project imagery as the only texture; black rectangular primary button, underlined secondary.

STORY: The visitor learns this is Jordan's collection of shipped work, sees the three newest pieces at full scale, takes in a season of real GitHub activity, browses the archive, then leaves to a project, the CV, or the blog (the Journal).

FIRST VIEWPORT: Hairline nav: left anchors (Looks, Archive, Activity), centre SIMONOVSKI wordmark linking home, right CV · Journal · Talks · GitHub. Obsorio's real game image fills the right ~60% to the edge, with an edge-code strip along its foot. The name OBSORIO set enormous and low across the image boundary, ink over the copy column and switching colour exactly at the plate edge, with the collection title, the one-line description, a black "Play Obsorio" button and an underlined "obsor.io" link in the left column. A vertical look index (01–03) sits in the far-left margin.

FORM: Luxury fashion flagship (catalog challenger, bolder re-roll round 1, lead by deal). Raises: edge-code provenance strip per look (from 16mm film); fixed-position activity digits that roll when live data lands (from nixie counter); one accent at a time (from curved crease). seed:9c6908fc1ac2d775. Signature interaction: looks reveal as slow clip-path unveils as each enters, the index rail and accent follow the look in view, and activity digits roll in. Reduced motion: everything visible, no reveals.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
