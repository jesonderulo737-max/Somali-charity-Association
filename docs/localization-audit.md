# Somali interface audit — 13 November 2026

Repository: jesonderulo737-max/Somali-charity-Association. Review branch: feature/somali-interface. PR: https://github.com/jesonderulo737-max/Somali-charity-Association/pull/1. Starting translation commit: 6a0fb87b134552b415a93325046ab51737f4538d. Main remained at d71123b5f290a3719cb85ef792b2154ce1976d56 during this audit. No merge or deployment was performed.

## Scope and file review

Every source component and dataset was inspected, including files outside the original PR diff.

| Files inspected | Result |
| --- | --- |
| src/App.jsx | Repaired malformed/duplicated JSX; Somali navigation, program chooser, footer and Zakat fields; stable support routing |
| src/Campaigns.jsx; src/campaigns.json | Somali titles, descriptions, filter labels, posters, player labels and source links; stable internal category keys |
| src/Scholarships.jsx; src/school-photos.json | Fixed undefined photos import; Somali batch labels, captions, photo viewer, full/short date labels; preserved all 28 sources and dates |
| src/Graduates.jsx; src/graduate-cohorts.json | Both Somali cohort controls reviewed; all 40 original names preserved exactly |
| src/HeroSlideshow.jsx; src/hero-content.js | All ten titles, descriptions, reach units and alt descriptions reviewed; removed mixed English; rotation/reduced-motion behavior preserved |
| src/ActivitySummary.jsx | Seven activity rows and expandable source excerpts reviewed; remaining English removed; portion unit clarified; avoided inferring marble from a tile-installation caption |
| src/Donations.jsx; src/donations.js; src/giving-programs.json | Somali program/type labels, instructions, monthly explanation, dedication, sender phone, email consent, copy status and WhatsApp drafts; exact recipients, codes and rates preserved |
| src/SocialStories.jsx | Contact details and social links reviewed; personal/account names, numbers and URLs preserved |
| src/main.jsx; src/calculations.js | Reviewed; bootstrap and donation/Zakat arithmetic unchanged |
| src/localization.js | New shared Somali labels, stable filter/routing helpers, date formatting and localized native-form validation |
| src/styles.css; index.html | Somali language/metadata retained; narrow-phone cohort wrapping only; original branding, fonts and animation maintained |
| tests/content.test.mjs; tests/donations.test.mjs; tests/hero.test.mjs; tests/localization.test.mjs; tests/sites-worker.test.mjs | Updated English-only expectations; added filtering/routing, data integrity, validation, scope checks and Zakat edge cases; worker tests unchanged |
| README.md; AGENTS.md; docs/*; design-qa.md | Reviewed operating/content boundaries; documented localization conventions and this audit |
| package.json; pnpm-lock.yaml; pnpm-workspace.yaml; vite.config.mjs; worker/index.js; scripts/prepare-sites-build.mjs; .openai/hosting.json; public/_headers; .github/workflows/ci.yml | Reviewed; runtime, dependency lock, hosting, security headers and workflow unchanged |

Modified during the audit: AGENTS.md, README.md, src/App.jsx, src/Campaigns.jsx, src/Donations.jsx, src/Scholarships.jsx, src/ActivitySummary.jsx, src/donations.js, src/hero-content.js, src/campaigns.json, src/school-photos.json (restored stable keys), src/styles.css, tests/content.test.mjs, tests/donations.test.mjs, tests/hero.test.mjs. Added src/localization.js, tests/localization.test.mjs and this report. Other translated files were inspected and retained from PR #1.

## Confirmed issues corrected

1. Malformed conditional JSX and a duplicated trailing block prevented App.jsx from building.
2. Scholarships imported sawir but used photos, causing an undefined-variable render failure.
3. UI-language strings were used as category/batch identifiers. Stable keys now drive filtering and support routing; Somali labels are display-only.
4. Mixed English remained in the Eid alt text, Ramadan-team headline, Zakat al-Fitr activity row and source label, donor placeholders, and the Sadaqah type label.
5. Native email/number validation could display English. Custom Somali messages now replace those messages and clear when the user edits the field. The actual email error bubble was visually verified.
6. Copy status could retain a previous transfer amount after program/amount changes. It now clears when those values change.
7. Longer Somali cohort labels overflowed their cards at 320px. They now wrap at that narrow breakpoint without changing desktop layout.
8. Old tests expected English user-facing strings. Assertions now preserve stable identifiers and verify Somali display text and localized behavior.

Terminology preserves donor contributions versus beneficiary gifts, people versus families, and Ramadan meal/iftar portions versus unique recipients. Provisional donation amounts are described as starting amounts, not a newly approved policy. Student names and payment account names were not translated.

## Verification results

- pnpm install --frozen-lockfile: PASS; no dependency/lock changes.
- pnpm build: PASS; static assets and preserved Sites worker/hosting outputs produced.
- pnpm test: 25 passed, 0 failed. Includes 9 new tests compared with main.
- pnpm audit --audit-level high: PASS; no known vulnerabilities reported.
- JSX parse/scope checks: PASS for every JSX file, including the import regression.
- node --check for source JS, build scripts and worker: PASS.
- Every tracked JSON parsed; git diff --check passed. No standalone lint command is configured.
- Compared against main: calculation source and payment configuration unchanged; all program/gallery source URLs, media paths, durations, dates and all 40 student names preserved; no public media changes.

## Browser verification

In-app browser, production preview http://127.0.0.1:4173/. Widths 320, 390, 768, 1024 and 1440px checked. No horizontal page overflow. Cohort card wrapping was repaired and rechecked at 320px; the donation dialog has no horizontal overflow at 390px.

- Navigation: every internal section target exists. Somali mobile menu opens, closes after selection, and reaches the graduate section.
- Slideshow: all ten photographs observed with Somali text; automatic ten-second rotation and wrap-around observed. Contained photos and text fit on desktop; mobile text/photo separation verified, including the facility slide. Reduced-motion and hidden-page timer guards, listener cleanup and CSS overrides verified by source comparison and regression checks; OS/browser reduced-motion preference was not changed for a runtime emulation test.
- Videos: all seven opened and played, with advancing currentTime, paused=false and no media error. Escape removes the player and restores focus to its launch button.
- Program filters: water 1, Eid 3, Zakat al-Fitr 1, Ramadan 2, all 7.
- Gallery: 26 school and 2 Eid records, all 28 expanded; photos loaded without broken-image errors. Lightbox Escape and trigger-focus return verified. Original links/dates compared with main.
- Graduates: 2025 and 2026 each displayed 20 students, with matching first and last entries; full name lists are hash-protected in a regression test.
- Zakat: 10,000 assets less 1,000 liabilities at a 5,000 threshold gives USD 225; 4,999 at that threshold gives zero; empty assets give no estimate. Invalid, negative, threshold and liability cases covered by tests. Arithmetic unchanged.
- Donation: choosing a program opens the dialog immediately. Presets, custom amounts, monthly/one-time labels and provisional minimums retained. USD 0.49 exposes no transfer link; pending Zakat al-Fitr disables the amount and provides no dial link. All five provider details checked. At USD 10 the exact EVC/ZAAD/Sahal codes remained *712*616666744*10#, *880*0616666744*10# and *883*0616666744*10#. M-Pesa and E-Dahab remain number/instruction flows. Copy action and clearing stale status verified. Somali help URLs decoded and checked; sender-number verification drafts, dedication and separate email-update consent covered by tests.
- Accessibility: html lang=so; translated accessible labels/alt text; visible focus styling; native modal focus containment, Escape and trigger-focus restoration verified. Invalid email displayed a Somali message; clearing email clears its custom error and disables updates. No console errors were reported. No automated screen-reader certification is claimed.

## Remaining text and limitations

No unintended English was found in app-authored interface text after source and rendered review. Brand/provider names, personal names, USD/SIM and other necessary technical values remain. Internal program/category keys and developer documentation may remain English. Original source excerpts, text embedded in existing photos/videos, and browser-owned native media-control menus are preserved; browser-owned language follows the user's browser/OS.

No money was sent, dialer launched, WhatsApp message sent, or automated subscription created during QA. Physical Android/iPhone/operator USSD behavior remains a real-device launch check. Program minimums, Zakat al-Fitr rate, sender domain/email service, verified-payment backend and automated email remain deferred as previously agreed. The website does not claim card processing, automated receipts or recurring debits.

The localization branch is technically ready for SCO's review and approval. PR #1 remains unmerged; production was not deployed. The final commit SHA and remote CI result are supplied in the PR and completion message.
