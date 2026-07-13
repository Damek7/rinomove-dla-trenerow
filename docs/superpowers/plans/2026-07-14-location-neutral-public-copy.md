# Location-Neutral Public Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove public references to Warsaw, launch disciplines, and the pilot stage without claiming nationwide availability.

**Architecture:** Keep the existing static single-page structure unchanged. Extend the existing HTML content contract test first, then make only the copy removals needed for it to pass and publish the verified commit directly to `main`.

**Tech Stack:** Static HTML, inline JavaScript, Node.js `node:test`, Git.

## Global Constraints

- Do not add claims such as `cała Polska` or `ogólnopolska`.
- Keep `Budujemy`, `Planujemy`, and `Docelowo` where they explain unfinished capabilities.
- Do not change CSS, layout, assets, navigation, form behavior, or JavaScript.
- Remove public references to Warsaw, the pilot, and the sentence naming tennis and boxing as launch disciplines.

---

### Task 1: Make the public copy location- and launch-neutral

**Files:**
- Modify: `test/index-content.test.js`
- Modify: `index.html`

**Interfaces:**
- Consumes: complete UTF-8 contents of `index.html`.
- Produces: `npm test`, which verifies the public copy contract.

- [ ] **Step 1: Write the failing content test**

Add this test to `test/index-content.test.js` and update the hero test so it only requires the concrete product sentence:

```js
test('public copy does not reveal launch location, disciplines, or stage', () => {
  assert.doesNotMatch(html, /warszaw/i)
  assert.doesNotMatch(html, /pilotaż/i)
  assert.doesNotMatch(html, /Zaczynamy od trenerów tenisa i boksu/i)
})
```

- [ ] **Step 2: Run the test and verify the expected failure**

Run: `npm test`

Expected: FAIL because `index.html` still contains Warsaw, pilot, and launch-discipline references.

- [ ] **Step 3: Apply the minimal copy changes**

Update `index.html` as follows:

- Meta description: remove `w Warszawie`.
- Hero eyebrow: use `Dla trenerów`.
- Hero paragraph: keep only `Budujemy jedno miejsce na profil, terminy, rezerwacje i płatności.`
- Hero microproof: remove the `Warszawa` item.
- Manifesto: replace `warszawską platformę` with `platformę`.
- Free-period card and FAQ answer: remove `w pilotażu`.
- FAQ: remove the complete `Czy RinoMove już działa?` item.
- Footer: use `Platforma dla trenerów`.

- [ ] **Step 4: Verify the implementation**

Run: `npm test`

Expected: all tests pass with zero failures.

Run a case-insensitive search of `index.html` for `Warszaw`, `pilotaż`, and `Zaczynamy od`.

Expected: no matches.

Run: `git diff --check`

Expected: exit code `0`.

- [ ] **Step 5: Check the page visually**

Open the local page at desktop and mobile widths. Confirm that the hero, free-period card, FAQ, and footer remain readable and that no empty spacing or separator is left by removed copy.

- [ ] **Step 6: Commit and publish to main**

```bash
git add index.html test/index-content.test.js docs/superpowers/plans/2026-07-14-location-neutral-public-copy.md
git commit -m "Remove launch details from trainer landing"
git push origin main
```

Expected: the remote `main` branch points to the new commit.

- [ ] **Step 7: Verify the public deployment**

Open `https://damek7.github.io/rinomove-dla-trenerow/` after GitHub Pages updates. Confirm the deployed HTML contains no Warsaw, pilot, or launch-discipline references.
