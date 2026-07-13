# Location-Neutral Public Copy Design

**Date:** 2026-07-14

## Goal

Present RinoMove as a location-neutral trainer brand. The public page must not reveal the city used for initial operations, name the disciplines used at launch, or describe the current stage as a pilot.

## Approved Direction

Use neutral language rather than claiming nationwide availability. Remove location and launch-stage details without replacing them with statements such as "all of Poland" or "nationwide".

## Public Copy Changes

- Remove every reference to Warsaw from metadata and visible page copy.
- Change the hero eyebrow to `Dla trenerów`.
- Keep the concrete hero sentence about profiles, schedules, bookings, and payments.
- Remove the sentence that says RinoMove starts with tennis and boxing.
- Remove the location item from the hero microproof row.
- Change `warszawską platformę` to `platformę` in the manifesto.
- Remove the FAQ item that asks whether RinoMove already works, because its answer exposes the pilot stage.
- Remove `w pilotażu` from both explanations of the three-month free period.
- Shorten the footer to `Platforma dla trenerów`.

The general list of supported sports may remain because it describes the product category, not the launch order.

## Truthfulness Boundary

Keep wording such as `Budujemy`, `Planujemy`, and `Docelowo`. This avoids presenting unfinished capabilities as already available while respecting the decision not to use the word `pilotaż`.

## Technical Scope

- Modify only `index.html` and its content contract test.
- Do not change CSS, layout, assets, navigation, form behavior, or JavaScript.
- Add test coverage asserting that public HTML contains no Warsaw reference, no pilot wording, and no launch-order sentence.

## Verification

- Run `npm test` and require all tests to pass.
- Search `index.html` for `Warszaw`, `pilotaż`, and `Zaczynamy od`; require no matches.
- Run `git diff --check`.
- Inspect the page at desktop and mobile widths to confirm that removing text does not disturb the layout.
