# Tennis Benefits Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current boxing-led product section with a full-width tennis photo and a dark, editorial benefits panel aimed at trainers.

**Architecture:** Keep the project’s single-file landing-page structure. Modify only the `#narzedzia` markup and its existing section-specific CSS in `index.html`; reuse `assets/tennis-back-serve.png` and add no dependencies or scripts.

**Tech Stack:** Semantic HTML5, responsive CSS, existing Manrope and DM Sans web fonts, local Node static server.

## Global Constraints

- Change only the `#narzedzia` section and its section-specific styles.
- Above 900 px, render two equal-width columns with the tennis photograph on the left and the dark panel on the right.
- At 900 px and below, stack the photograph above the panel.
- Use the approved Polish label, headline, and three benefit rows verbatim.
- Do not add animation, interactive elements, dependencies, cards, rounded corners, or decorative shadows.
- Preserve an `h2` heading and meaningful alternative text for the photograph.

---

### Task 1: Replace the product section with the approved editorial split

**Files:**
- Modify: `index.html:21`
- Modify: `index.html:26-27`
- Modify: `index.html:62-67`

**Interfaces:**
- Consumes: existing CSS variables `--ink`, `--blue`, existing font families, and `assets/tennis-back-serve.png`.
- Produces: semantic `.product-media`, `.product-panel`, and `.feature` elements scoped to `#narzedzia`.

- [ ] **Step 1: Record a failing structural check against the current markup**

Run:

```powershell
$html = Get-Content -Raw index.html
if ($html -match '04 / DLACZEGO RINOMOVE' -and $html -match 'WIĘCEJ TRENINGÓW\. MNIEJ ADMINISTRACJI\.' -and $html -match 'assets/tennis-back-serve\.png') { exit 0 } else { Write-Error 'Approved tennis benefits section is missing'; exit 1 }
```

Expected: command exits with code 1 and reports that the approved section is missing.

- [ ] **Step 2: Replace the existing section-specific CSS**

Replace the current `.product` through `.boxing-photo img` rules with:

```css
.product{padding:0;background:var(--ink);color:white}
.product-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:760px}
.product-media{min-height:760px;overflow:hidden;background:var(--ink)}
.product-media img{width:100%;height:100%;object-fit:cover;object-position:center}
.product-panel{display:flex;flex-direction:column;justify-content:center;padding:clamp(64px,7vw,120px)}
.product-kicker{color:#c3c2c8;font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.product h2{max-width:760px;margin-top:48px;font-size:clamp(3.6rem,6.2vw,7.4rem);line-height:.9;letter-spacing:-.065em;text-transform:uppercase}
.feature-list{margin-top:clamp(56px,7vw,100px);border-top:1px solid rgba(255,255,255,.17)}
.feature{display:grid;grid-template-columns:48px minmax(150px,.8fr) minmax(220px,1.2fr);gap:22px;align-items:baseline;padding:22px 0;border-bottom:1px solid rgba(255,255,255,.17)}
.feature-no{color:var(--blue);font-size:13px;font-weight:800;font-variant-numeric:tabular-nums}
.feature b{font:700 15px 'Manrope',sans-serif;text-transform:uppercase}
.feature p{color:#aaa9b0;font-size:14px}
```

- [ ] **Step 3: Add the responsive rules**

Replace the existing `.product-grid` and `.boxing-photo` responsive overrides inside the 900 px and 620 px media queries with:

```css
@media(max-width:900px){
  .product-grid{grid-template-columns:1fr;min-height:0}
  .product-media{min-height:0;height:52vw;max-height:520px}
  .product-panel{padding:72px 40px 82px}
  .product h2{font-size:clamp(3.4rem,10vw,6rem)}
}
@media(max-width:620px){
  .product-media{height:72vw;min-height:300px}
  .product-panel{padding:58px 20px 68px}
  .product h2{margin-top:32px;font-size:clamp(3rem,14vw,4.5rem)}
  .feature-list{margin-top:48px}
  .feature{grid-template-columns:38px 1fr;gap:14px 12px;padding:20px 0}
  .feature p{grid-column:2}
}
```

Keep unrelated declarations in both existing media queries unchanged.

- [ ] **Step 4: Replace the existing `#narzedzia` markup**

Use exactly:

```html
<section class="product" id="narzedzia">
  <div class="product-grid">
    <div class="product-media">
      <img src="assets/tennis-back-serve.png" alt="Tenisista wykonujący serwis, widok od tyłu" loading="lazy">
    </div>
    <div class="product-panel">
      <div class="product-kicker">04 / Dlaczego RinoMove</div>
      <h2>Więcej treningów. Mniej administracji.</h2>
      <div class="feature-list">
        <div class="feature"><span class="feature-no">01</span><b>Nowi klienci</b><p>Profil, który zamienia zainteresowanie w rezerwacje.</p></div>
        <div class="feature"><span class="feature-no">02</span><b>Terminy pod kontrolą</b><p>Kalendarz i kontakt w jednym miejscu.</p></div>
        <div class="feature"><span class="feature-no">03</span><b>Proste płatności</b><p>Mniej wiadomości, przypomnień i przelewów.</p></div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 5: Run structural and whitespace checks**

Run:

```powershell
$html = Get-Content -Raw index.html
if ($html -match '04 / Dlaczego RinoMove' -and $html -match 'Więcej treningów\. Mniej administracji\.' -and $html -match '<div class="product-media">\s*<img src="assets/tennis-back-serve\.png"' -and $html -notmatch 'boxing-photo') { 'PASS: approved section markup found' } else { Write-Error 'FAIL: section markup mismatch'; exit 1 }
git diff --check
```

Expected: `PASS: approved section markup found`; `git diff --check` produces no output.

- [ ] **Step 6: Commit the implementation**

```powershell
git add index.html
git commit -m "feat: redesign trainer benefits section"
```

Expected: one commit containing only `index.html`.

---

### Task 2: Verify desktop and mobile presentation

**Files:**
- Verify: `index.html`
- Create: `output/tennis-benefits-desktop.png`
- Create: `output/tennis-benefits-mobile.png`

**Interfaces:**
- Consumes: the section markup and responsive styles from Task 1, served by `npm start` at `http://127.0.0.1:8790/#narzedzia`.
- Produces: two local visual evidence files; `output/` remains ignored by Git.

- [ ] **Step 1: Start the existing local server**

Run:

```powershell
npm start
```

Expected: server reports `http://127.0.0.1:8790` and remains running.

- [ ] **Step 2: Capture and inspect the desktop section**

Open `http://127.0.0.1:8790/#narzedzia` at 1440 × 1000 and save the screenshot as `output/tennis-benefits-desktop.png`.

Expected visual result: equal columns, tennis photograph on the left, dark panel on the right, no gap or rounded seam, large headline, and three aligned benefit rows.

- [ ] **Step 3: Capture and inspect the mobile section**

Open the same URL at 390 × 844 and save the screenshot as `output/tennis-benefits-mobile.png`.

Expected visual result: photograph above the panel, no horizontal scrolling, readable headline, and each benefit rendered as a number beside a title-and-description block.

- [ ] **Step 4: Check page overflow in both viewports**

Evaluate in the browser at both viewport sizes:

```js
document.documentElement.scrollWidth === document.documentElement.clientWidth
```

Expected: `true` at 1440 × 1000 and 390 × 844.

- [ ] **Step 5: Confirm the working tree contains no unintended tracked changes**

Run:

```powershell
git status --short
```

Expected: no tracked changes; screenshots may remain untracked only if the existing `.gitignore` does not already ignore `output/`.
