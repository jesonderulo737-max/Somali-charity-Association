# SCO design and content verification

12 November 2026. The user selected the blue/navy project-update design, then requested consistent ordinary fonts, real project imagery, simpler copy and corrected translations. These instructions supersede generated project photos and decorative copy in the original mock.

## Verified

- Desktop at 1440px and mobile in Chrome at 390px: correct responsive layout and no page-width overflow. The activity table scrolls within its own region on mobile. Seven activity rows rendered.
- Mobile navigation opens and closes through a section link. Eid photo filter returns two images. All 28 gallery assets exist and original-post links are retained.
- Actual water video: All seven MP4 files are now downloaded through FDown and hosted locally. Every file loaded to readyState 4 in the browser with the expected duration and video dimensions. The water player entered playback. Tests confirm video/audio track markers in each file. Local posters are real project media.
- Donation enquiry accepts $0.50 and displays it correctly. No payment is taken. Email/call links use listed business contacts.
- Zakat input example: assets $10,000, liabilities $1,000, threshold $5,000 => $225 estimate. Eligibility caveat is visible.
- Body uses Arial/Helvetica system typography. No external font requests, generated hero/education images, empty reports or newsletter demo.
- School copy describes $0.50/$1 as donor contributions; Eid copy refers to money for clothes/shoes; Ramadan 75,600+ is portions, attributed to SCO.
- Production build passed, ten tests passed, pnpm audit returned no known vulnerabilities.

## Limits before launch

Facebook review covered 143 loaded captions plus the supplied sources, not a complete archive. English meanings are linked to Somali excerpts; organization-provided figures/location are attributed. Original Facebook sources remain linked; local playback works without loading Facebook’s player. Payments, organization-approved terms/privacy, domain/hosting and content permissions remain launch work.

The IAB viewport override did not affect the existing preview, so mobile verification was completed in Chrome instead.
