# Phase 5 — reviewer verdict

Graded against `site/profile.md`, `design.md`, `site/index.html`, and both rendered
screenshots (`site/desktop.png`, `site/mobile.png`).

## J1 — Every checkable fact is true — PASS
Every fact on the page (name, employer, dates, project metrics, technologies, contact
info) traces to `site/profile.md`. No inflation. The "3+ years" line is deliberately
rephrased as "since June 2023" rather than restated as a computed duration — not a gap.

## J2 — The projects say what they actually are — PASS
Each of the four project cards names both what the thing does and what Muhammad
specifically did ("I implemented the generator and discriminator halves...", "I trained a
Conv1D encoder...", "I attacked that from three separate angles...", "I built a
content-based recommender..."). None is generic enough to paste onto another project.

## J3 — The About section is about you — PASS
Specifics that wouldn't fit a random classmate: the repeated "how much of a model can you
take away" framing, the named frameworks, the production-vs-notebook distinction, the
habit of "rebuilding whatever the field publishes next."

## J4 — It is designed, not merely formatted — PASS
The stated decision ("compress first, expand on interaction") is carried out concretely:
collapsed cards show only a title and one accent-coloured metric; opening one reveals the
full account; the accent colour is used only for the metric, the active nav link, and the
focus ring — nowhere else. This is a real, executable, refusable decision, not a mood
board.

## J5 — It survives a phone — PASS
At 390px (per `mobile.png`) the layout isn't the desktop page squeezed thin: cards stack
one per row, the metric tag wraps under the title instead of truncating, and the
collapsed-by-default state is already the right shape for a narrow screen.

## J6 — It could not have been a PDF — PASS
The disclosure interaction is load-bearing, not decorative: a PDF export would show only
titles and metrics, never the full project accounts underneath. The nav also tracks
scroll position live (an active-section highlight), which paper cannot do.

VERDICT: PASS
