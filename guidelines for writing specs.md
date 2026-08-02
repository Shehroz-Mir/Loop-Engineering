# Guidelines for writing specs (for loop-engineering projects)

A spec is what a conditional loop (`/goal`-style: "keep working until X holds") is
measured against. The loop is only ever as good as the spec — a vague or self-contradicting
spec produces a loop that either grinds forever or confidently ships something wrong. These
notes are domain-agnostic: they apply whether the loop is building a web page, migrating
code, writing tests, or processing data.

A spec answers four questions, roughly in this order.

---

## 1. What's the ground truth, and who owns it?

Before writing a single check, decide what source of facts the loop may not contradict or
invent beyond. A portfolio's `profile.md`, a migration's existing test suite plus an
explicit "must not change" list, a data pipeline's schema doc — the specific artifact
varies, the rule doesn't:

**The loop may not assert a fact the ground-truth artifact doesn't support. If the ground
truth is thin, the output should be thin too — never padded to look complete.**

Decide this first. Every downstream rule gets measured against it.

---

## 2. Split "provable" from "judged," and write each differently

- **Provable** — a script can return exit code 0/1 with no opinion involved: counts,
  thresholds, presence/absence, formatting, offline-ness, performance numbers. Write these
  as ordinary automated checks.
- **Judged** — requires taste, truth-checking against real-world context, or "did this
  actually solve the problem." No script can decide it. These need a separate reviewer
  (a human, or a second agent with different incentives than the builder), and the
  criterion must be an **operational question, not a vibe**.

  - Bad: "Is this good code?"
  - Good: "State the one architectural decision this diff embodies and point to where
    it's carried out. 'There isn't one' is a FAIL."

  The second version is gradable by a mind even though no regex could touch it — write
  every judged criterion with that same precision.

---

## 3. Adversarially pressure-test each rule before trusting it

For every mechanical check, ask: **what's the cheapest way to satisfy this without doing
the real work?** An empty file passes "no lint errors." A copy-pasted test passes "test
exists." Keep tightening the rule until you can't find a cheap satisfier — that's the
signal you've hit the boundary where the rule belongs in the judged tier, not that it
needs a fourth patch.

Then check **pairs of rules** against a worst-case/thin input, not each rule in isolation.
Two individually-reasonable rules can be jointly unsatisfiable — e.g. a minimum-output-size
rule plus a no-fabrication rule, applied to a thin input, traps the loop between "pad it"
and "fabricate it" forever. You find this by simulating the thinnest realistic input
through the *entire* spec at once, not by reviewing rules one at a time.

---

## 4. Design the loop's process, not just its finish line

- **Every phase writes its decision to a file**, not just a chat reply — otherwise nothing
  downstream (including you, auditing later) can verify it happened rather than trust a
  self-report.
- **Separate maker from checker**, and give the checker less access than the maker
  (read-only, or read + a verify-command but no edit/write). A judge that can quietly fix
  what it's grading isn't a judge.
- **State environment assumptions explicitly**, and prove the mechanical layer actually
  runs where it will run before trusting a green result. A checker that silently assumes
  a platform, a credential, or a network connection isn't a stronger proof than no checker.
- **Cap it, and give it a place to fail loudly.** No loop should run unbounded. A
  stop-after-N-attempts rule plus "write what's still failing to a file" turns an
  unsatisfiable spec from an all-night bill into a one-page bug report.
- **Route failures to an owner.** Know in advance which phase/role is responsible for
  fixing each kind of failure, or the loop (and you) will thrash blaming the wrong stage.

---

## Quick pre-flight checklist

Before handing a spec to a loop:

- [ ] Ground-truth artifact identified; loop cannot invent facts beyond it
- [ ] Every check is clearly either provable (scripted) or judged (a reviewer's job)
- [ ] Every judged criterion is phrased as an answerable question with a stated failure case
- [ ] Every provable check has been pressure-tested for its cheapest satisfier
- [ ] The spec has been walked against a thin/worst-case input, checking rules *together*
  for contradictions, not just individually
- [ ] Every phase's output is a persisted file, not a live report
- [ ] The checker has less access than the builder
- [ ] Environment assumptions are written down and verified, not implicit
- [ ] There's an attempt cap and a designated failure-report file
- [ ] Each possible failure maps to an owner/phase responsible for fixing it
