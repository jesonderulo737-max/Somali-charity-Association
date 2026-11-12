# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved SCO content and design preferences

Use blue/navy with SCO orange, consistent Arial/Helvetica system typography, and plain factual copy. Use real SCO media, not generated project images. Small amounts ($0.50/$1) in the school caption are donor contributions, not gifts distributed or scholarship award values. The 75,600+ Ramadan total counts meals/iftar portions, not unique people, and is reported by SCO. Keep original caption links alongside translated summaries; do not infer beneficiary names from photos.

Use SCO’s voice in visible program descriptions (we/our). Avoid editorial phrases such as “the caption says” or “the post announces”; retain original links and translation/source provenance in expandable details and documentation.
