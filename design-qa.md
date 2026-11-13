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

## Mobile-money donation update

Program selection now initializes its configured minimum. Sadaqah currently retains USD 0.50; Zakat al-Fitr rate is pending SCO. EVC/ZAAD/Sahal codes use exact recipients and encode the final hash in tel links. M-Pesa and E-Dahab expose copyable numbers. Receipt requests use a WhatsApp draft; no payment is marked confirmed and no automatic email is claimed. See docs/donations-and-email.md for the pending activation details.

## Hero slideshow — 13 November 2026

Four user-supplied photographs now form the hero background. Automatic advance was observed, manual next/previous and wrap-around worked, and manual selection paused playback. The implementation also pauses on focus/hover and hides autoplay when reduced motion is requested. Desktop 1440px: navigation height 68px and smaller 46px hero title. Mobile 390px: navigation height 64px, title 36px, no horizontal page overflow. All four image assets loaded. Reach labels keep 148,000+ people (education/Eid) separate from 544,000+ families (feeding), with no monetary or unique-beneficiary interpretation. Graduation year 2026 comes from SCO’s supplied caption. Build and all 13 existing tests passed; the new carousel was verified in the browser.

## Annotated hero correction — 13 November 2026

Replaced the background overlay with a left program panel and a separate framed image on the right. Titles, descriptions and the correct people/family figure share the same active slide object and rotate together every 1,000ms. Removed the separate program-reach strip and all visible carousel controls/captions. At desktop 1440px the photo frame starts at y=88 below the 68px header; images use contain, so the whole photograph remains in the frame. Mobile 390px stacks the matching copy and full photo with no horizontal overflow. Timed browser samples confirmed Eid/148,000, graduates/148,000, and feeding/544,000 pairings; the fourth distribution slide was also observed with its correct family count. Production build and all 13 tests passed. Earlier background-overlay/manual-control QA above describes the superseded version.

## Ten-second animated hero — 13 November 2026

Supersedes the earlier one-second carousel. Ten original photographs now use synchronized photo/copy swaps with opacity, subtle scale and soft focus; no directional swipe or visible card outline. Decorative SVG orbits and ambient glows accompany staggered text entry. Reduced motion disables autoplay and animations. A browser check held the first children/slogan pair at 8.5 seconds and observed the matching Eid pair at 10.5 seconds. At 1440px and 390px there is no horizontal overflow; all ten loaded photos, including the portrait team image, fit within the photo area. The six supplied images are preserved unchanged. Ramadan team photos use SCO-confirmed iftar/water context and the six supplied locations; the 75,600+ figure retains SCO's earlier explicit meal/iftar-portion unit. Production build and all 15 tests passed.
