# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved SCO content and design preferences

Use blue/navy with SCO orange, consistent Arial/Helvetica system typography, and plain factual copy. Use real SCO media, not generated project images. Small amounts ($0.50/$1) in the school caption are donor contributions, not gifts distributed or scholarship award values. The 75,600+ Ramadan total counts meals/iftar portions, not unique people, and is reported by SCO. Keep original caption links alongside translated summaries; do not infer beneficiary names from photos.

Use SCO’s voice in visible program descriptions (we/our). Avoid editorial phrases such as “the caption says” or “the post announces”; retain original links and translation/source provenance in expandable details and documentation.

Donation flows must use SCO-provided recipient numbers. Dial templates must be supplied by SCO or verified against the operator’s own documentation. Prefill a dialer/WhatsApp message; never auto-confirm transfers or collect PINs. Program selection starts at its configured minimum; Zakat al-Fitr rate must be approved by SCO. Email receipts require verified payments, and donation-round updates require separate unchecked opt-in and an unsubscribe path.

## Deferred decisions — confirmed by SCO on 12 November 2026

SCO will decide the minimum donation for each program later. Existing USD 0.50 sadaqah amounts are provisional technical defaults, not an approved program policy; keep them configurable and describe them as starting amounts. The Zakat al-Fitr per-person rate remains unset. SCO will also choose its domain and purchase/choose the sending email account and email provider later. Do not guess these choices or claim automatic email is active. Keep room for verified thank-you emails, opt-in donation-round announcements and unsubscribe handling.

SCO reconfirmed Sahal recipient 0616666744 and exact template *883*0616666744*amount#. M-Pesa recipient remains 0712828308; country/currency are not confirmed.

## Slideshow and reach — 13 November 2026

Use the four SCO-supplied photographs for the hero background slideshow: Eid support envelopes, graduation, food packages and family food distribution. Graduation caption/year is supplied by SCO as 2026. Keep the top navigation compact (68px desktop, 64px mobile) and hero heading smaller to leave more room for photos. Provide manual slideshow controls, a pause button, pause on hover/focus, and respect reduced-motion preferences.

SCO confirmed that 148,000+ is people supported through education and Eid and 544,000+ is families fed through the feeding program. These are not monetary amounts. Period and unique/cumulative counting methods were not established; do not label them unique beneficiaries, sum the metrics or conflate them with the 75,600+ Ramadan meal/iftar portions.
