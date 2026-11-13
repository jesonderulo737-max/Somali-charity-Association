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

Use the four SCO-supplied photographs for the hero slideshow: Eid support envelopes, graduation, food packages and family food distribution. Graduation caption/year is supplied by SCO as 2026. Keep the top navigation compact (68px desktop, 64px mobile) and hero heading smaller to leave more room for photos. The latest annotated correction below governs the layout and rotation; retain reduced-motion support.

SCO confirmed that 148,000+ is people supported through education and Eid and 544,000+ is families fed through the feeding program. These are not monetary amounts. Period and unique/cumulative counting methods were not established; do not label them unique beneficiaries, sum the metrics or conflate them with the 75,600+ Ramadan meal/iftar portions.

## Corrected hero direction — 13 November 2026

The annotated screenshot supersedes the previous background-overlay layout: use a left text panel synchronized with a contained photo in a separate right visual frame. Put 148,000+ people (education/Eid) or 544,000+ families (feeding) inside the matching left text, not a separate statistics strip. Show 2026 graduation copy on its matching image. Images must fit completely inside their frame without reaching the header or cropping heads. Remove all visible slideshow arrows, dots, footer captions and play/pause controls. Advance photo and copy together every 1,000 milliseconds, with reduced-motion support.

## Latest motion direction — 13 November 2026

This supersedes the one-second timing and separate visible frame above: hold each synchronized photo/copy pair for 10 seconds. Use animated crossfade/scale/soft-focus swaps rather than directional swipe or photo movement toward the header. Blend the photo area into the navy hero with no visible card outline, while retaining full uncropped images. Add restrained decorative motion graphics and respect reduced motion. No visible carousel arrows, dots or playback controls. Add all six newly supplied photographs; first is the children/community portrait with the slogan “Happy children Happy somalia”. Facility photos receive descriptive captions without invented project dates, locations, costs or reach totals; team photos have no inferred identities or roles. Keep mobile and desktop layouts stable as slides change.

SCO identified both new team photographs as Ramadan feeding heroes who distributed iftar and water at Korontada, Isgoyska Balaksii, Isgoyska Bakaaraha, Isgoyska Tarabunka, Isgoyska Baar ubax and Isgoyska Taleex. Use the previously explicitly confirmed 75,600+ meal/iftar-portion counting unit; do not relabel it unique people. Team slides use this Ramadan total, never unrelated totals.

## Direct giving and graduate navigation — 13 November 2026
Selecting a program in the Support a program chooser opens the donation options immediately, without Continue. Keep amount presets and frequency inside the dialog. Add optional sadaqah dedication and include it in the donor verification draft. Replace payment references with the phone number the donation was sent from, using phone validation. Optional confirmation email and separately unchecked updates consent remain; email activation is deferred. Never mark payment verified from the donor number alone. Graduated students navigation and two cohorts requested; names and classification are awaiting SCO clarification.

SCO clarified the two graduate cohorts: cohort 1 is 2025 and cohort 2 is 2026, with 20 names supplied for each. Preserve the spelling and capitalization exactly as supplied in src/graduate-cohorts.json. Do not infer names from photographs or attach individual names to faces. Add Graduated students to desktop/mobile navigation and expose both year lists.

## Somali localization — 13 November 2026
The complete application interface, metadata, alt text, accessibility labels, validation and WhatsApp drafts must be natural Somali. Keep brand/payment-provider names and user-supplied personal names unchanged. Persist internal category, gallery-batch and giving-program keys separately from Somali labels in src/localization.js and programLabel. Use feature/somali-interface and PR #1 for this work; do not merge or deploy without explicit approval. Maintain exact payment codes, calculations, media, source links, dates and figures. Documents and internal identifiers need not be translated.

## Mosque wording, purpose and news — 13 November 2026

SCO corrected the mosque photographs: the exterior is a newly built mosque funded through donors' support and sadaqah; the interior is its prayer area, and the washing photograph is its ablution area. Use clear Somali captions naming the mosque/prayer/ablution context, not generic community facilities. Describe it as sadaqo jaariya. Replace visible Barnaamijyada/related forms with Mashaariicda/mashruuc and donation CTAs with Sadaqa bixi; stable internal English keys remain unchanged.

Retain the existing navy/blue/orange branding, Arial typography, real media, full contained hero photos and synchronized ten-second motion. Add a Somali mission/vision section and repository-managed news with filterable cards and readable article dialogs. Do not invent dates or report unverified totals; keep 75,600+ Ramadan portions distinct from unique people and the broader feeding-family figure. A staff CMS and automated email/backend remain unconnected. Continue in feature/somali-interface and PR #1; no merge or production deployment without approval.
