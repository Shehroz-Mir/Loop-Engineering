# The design decision
Every project on this page shows compressed first — one line, one defining metric — and only expands to its full reconstruction when a visitor opens it, mirroring the compress-then-reconstruct move (a VAE's latent code, LoRA's ~99.7% parameter cut, quantization, distillation) that is this person's actual work.

## Why this person
This person's projects are not a list of things built — they are, specifically and repeatedly, acts of throwing most of a thing away and keeping only what reconstructs it: a VAE's latent vector standing in for the full image, LoRA training ~0.3% of the parameters a model actually has, dynamic quantization shrinking a model ~58% and still running it ~28% faster, distillation compressing a BERT-family teacher into a smaller student. A page built on "show the compressed form, let the reader ask for the rest" is a page only this profile supports — it would be a strange, unearned metaphor on a translator's site or a bakery's, and that is exactly why it belongs here.

## How the page carries it out
- **Hero**: one line of role, no biographical padding — the compressed entry point, not a summary paragraph. The largest type token is the only display-scale event on the page.
- **Projects (the work grid)**: each project is an `<article>` built on a native `<details>`/`<summary>` (or an equivalent button + `aria-expanded`) so the collapsed text stays real DOM text, not a decoration. Collapsed, it shows only the `<h3>` and one accent-coloured metric pulled straight from `profile.md` (e.g. "-99.7% trainable params", "58% smaller / 28% faster", "4-level ablation, 256 eval pairs"). Opened, it reconstructs to the full ≥25-word account of the problem and this person's role in it. A card that shows its full paragraph with nothing collapsed, or a card that hides content with no way to open it, both violate the decision — that is the refusable part.
- **Skills**: grouped into the same categories `profile.md` already uses (Generative AI, Deep Learning, Model training, Experimentation, LLM Ecosystem, Vector databases, Deployment, Languages, Tools) as chip clusters, not one long flat list — a set reads as a set.
- **The accent has exactly one meaning**: the thing that survived compression. It marks the metric tag on a collapsed card, the current section in the nav, and the focus ring — nowhere else. If the accent shows up as a decorative flourish anywhere, that's ornament, not the decision.
- **At 390px it survives by**: the collapsed state — title plus one short metric tag — is already the right shape for a narrow screen, so nothing is squeezed to fit; cards stay one per row, the expand control is a full-width tap target, and the metric tag wraps under the title rather than truncating.
- **Motion**: the only animated thing is the expand/collapse (height + opacity, ~0.3s), because it is the one motion that *shows* something — the reconstruction happening. `prefers-reduced-motion` swaps it for an instant show/hide, not for nothing happening.

## Tokens
```css
:root {
  --bg: #0e1013;
  --fg: #e7e5e0;
  --accent: #f0b429;
  /* --fg on --bg = ~15.0:1 · --accent on --bg = ~10.2:1 — both computed, both clear AA */

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1.05rem;
  --text-lg: 1.3rem;
  --text-xl: clamp(2rem, 5vw, 3.2rem);
  --text-2xl: clamp(2.8rem, 9vw, 6.5rem);

  --space-1: 0.4rem;
  --space-2: 0.8rem;
  --space-3: 1.5rem;
  --space-4: 2.5rem;
  --space-5: 4rem;
  --space-6: 7rem;

  --measure: 48ch;
}
```

**Contrast, computed** (WCAG relative-luminance formula, not borrowed):
- `--bg #0e1013` → L ≈ 0.00512
- `--fg #e7e5e0` → L ≈ 0.77721 → ratio vs `--bg` = (0.77721+0.05)/(0.00512+0.05) ≈ **15.0:1**
- `--accent #f0b429` → L ≈ 0.51327 → ratio vs `--bg` = (0.51327+0.05)/(0.00512+0.05) ≈ **10.2:1**

Both clear WCAG AA (≥4.5:1) with real margin, so small drifts in the exact hex during build won't tip them below the line — but the builder must still recompute if either value changes even slightly.

**On `--measure`**: `ch` is the width of the digit `0`, not a character — it is not a reliable proxy for the rendered line length. `48ch` is a starting point tuned toward 45–75 rendered characters per line in a typical system-font stack, **not a guarantee**. The builder must render the actual page and measure characters-per-line on the live prose column, then adjust `--measure` until it lands in range — do not ship the token unmeasured.
