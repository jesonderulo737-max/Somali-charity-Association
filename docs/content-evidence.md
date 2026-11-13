# Content evidence and translation notes

Reviewed 12 November 2026. The website summarizes accessible public posts from [Somali Charity](https://www.facebook.com/somali.charity1/), supplied posts from [Ali Khadaab](https://www.facebook.com/Ali.khadaab/), and the linked [YouTube channel](https://www.youtube.com/@AliKhadaab1/videos). 143 loaded timeline captions were reviewed; repeated project updates and unrelated personal/religious posts were excluded from program counts. This is not a complete page archive.

## School donations

The ceremony caption states that the work began with $0.50, $1 and similar contributions from Somali supporters. These are donor contributions that supported the children’s progress, not award values or money handed to children. The visible website paragraph reflects the organization’s correction. Original parent-post URLs are retained per photo in `src/school-photos.json`.

## Program categories

The activity table in `src/ActivitySummary.jsx` preserves Somali excerpts, English meanings and source links for emergency water delivery, wells, education/orphan care, centre facilities, Ramadan iftar, Eid and Zakat al-Fitr. First-well completion and second-well drilling are statuses described in the reviewed posts, not independently inspected construction results.

The 75,600+ Ramadan total and six-team list were supplied by SCO. SCO clarified that the counting unit is meals/iftar portions distributed, not unique people. The short Ramadan captions themselves do not establish this total. Bosaso orphanage location for the Zakat al-Fitr video is SCO-provided. The additional Ciidsiin video is classified as Eid, rather than Ramadan.

## Media

28 original images: 26 school ceremony photos (11 September 2025) and two Eid clothing/shoe support photos (15 March 2026). Source URLs and parent posts are recorded in `src/school-photos.json`. Beneficiaries are not identified from faces or certificates. Seven program poster images and source URLs are in `src/campaigns.json`. Seven MP4 files were downloaded from the public links returned by FDown and are hosted locally. The program descriptions use SCO’s first-person voice; source details remain available for verification. Raw account screenshots and expiring CDN URLs remain outside the repository.

The emergency water video supplied by SCO resolves to a post whose embedded reel is 933498429323416. Facebook’s own Embed dialog provided its player URL. No generated water or education images are shipped.

## Supplied slideshow photos and reach figures (13 November 2026)

SCO supplied four additional photos in chat: children holding Eid support envelopes, graduates, food packages, and family food distribution. SCO identifies the graduation as 2026 and clarified that the new figures are people/families, not monetary amounts: 148,000+ people helped through education and Eid, and 544,000+ families fed. The reporting period and unique/cumulative counting basis were not established. These are separate from the 75,600+ Ramadan iftar portion count. See slideshow-sources.json for asset hashes and source notes.

## Graduate cohorts — SCO supplied on 13 November 2026
SCO provided two complete lists directly in chat for the Graduated students section: Cohort 1 (2025), 20 students; Cohort 2 (2026), 20 students. src/graduate-cohorts.json preserves their supplied spelling, abbreviations and capitalization. These are separate graduation cohorts; do not substitute the combined education/Eid reach metric for a graduate count. No individual is matched to a photograph.
