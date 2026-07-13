# Trainer Landing Positioning Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace self-declared “premium” positioning with concrete trainer outcomes and describe unfinished product capabilities honestly as part of the Warsaw pilot.

**Architecture:** Keep the existing single-page HTML structure, styling, anchors, and form behavior unchanged. Add one Node built-in content test that treats the published copy as the behavior under test, then make only the minimal text replacements required to pass it.

**Tech Stack:** Static HTML, inline JavaScript, Node.js `node:test`.

## Global Constraints

- Do not change layout, CSS, assets, navigation, or form mechanics.
- Do not use the word `premium` in public metadata or visible copy.
- Name tennis and boxing as the starting disciplines in Warsaw.
- Describe calendar, payment, chat, and review capabilities as being built or planned for the pilot.
- State that the free three-month period begins when the trainer profile launches in the pilot.

---

### Task 1: Make the trainer landing copy concrete and pilot-accurate

**Files:**
- Modify: `package.json`
- Modify: `index.html`
- Create: `test/index-content.test.js`

**Interfaces:**
- Consumes: the complete UTF-8 contents of `index.html`.
- Produces: `npm test`, which verifies the public positioning contract.

- [ ] **Step 1: Write the failing content tests**

```js
const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8')

test('public copy does not label the offer as premium', () => {
  assert.doesNotMatch(html, /premium/i)
})

test('hero names the concrete product and starting disciplines', () => {
  assert.match(html, /Budujemy jedno miejsce na profil, terminy, rezerwacje i płatności\./)
  assert.match(html, /Zaczynamy od trenerów tenisa i boksu w Warszawie\./)
})

test('future capabilities are presented as pilot work', () => {
  assert.match(html, /Budujemy profil, na którym klient pozna ofertę, cenę, lokalizację i dostępne terminy/)
  assert.match(html, /Opinię będzie mógł wystawić wyłącznie klient/)
})

test('free period begins with profile launch', () => {
  assert.match(html, /Bezpłatny okres zaczyna się w dniu uruchomienia profilu w pilotażu\./)
})

test('manual Instagram handoff is named accurately', () => {
  assert.match(html, />Skopiuj zgłoszenie<\/button>/)
})
```

- [ ] **Step 2: Run the test and verify the expected failure**

Run: `npm test`

Expected: FAIL because the current copy still contains `premium` and lacks the new pilot language.

- [ ] **Step 3: Replace only the public copy in `index.html`**

Replace the meta description, hero description, benefits introduction and cards, free-period explanation, FAQ answer, form instruction/button, and footer. Preserve all HTML structure, classes, IDs, and JavaScript behavior.

- [ ] **Step 4: Run verification**

Run: `npm test`

Expected: all five tests pass with zero failures.

Run: `rg -ni "premium" index.html`

Expected: no output and exit code `1` because there are no matches.

- [ ] **Step 5: Inspect and commit the focused change**

```bash
git diff --check
git diff -- index.html package.json test/index-content.test.js
git add index.html package.json test/index-content.test.js docs/superpowers/plans/2026-07-14-trainer-landing-positioning-copy.md
git commit -m "Refine trainer landing positioning"
```
