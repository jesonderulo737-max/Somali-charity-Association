# Somali Charity Organization (SCO)

Responsive website using SCO’s logo, navy/blue/orange palette and Arial system typography. Includes a four-photo hero slideshow with pause/manual controls, SCO-reported program reach, seven program videos, 28 original school/Eid photos, a source-linked activity summary, photo viewer, program filters, a Zakat estimate, and amount-filled mobile-money donation instructions.

## Local development

Requires Node.js 22+ and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm test
pnpm preview --host 127.0.0.1 --port 4173
```

The build emits static files in `dist/client` and the preserved Sites worker/hosting configuration in `dist/server` and `dist/.openai`. GitHub Actions builds, runs tests and audits dependencies.

## Content

Real photos and posters are stored locally. All seven supplied videos were downloaded through FDown’s public results and are hosted locally under public/videos, with native controls and original-update links. Contact links point to SCO’s listed email/telephone and public social accounts.

Caption translations are concise English meanings, with the Somali excerpts and original sources in the activity table. Small school-post amounts are donations that enabled the work. Ramadan’s 75,600+ figure counts portions and is supplied by SCO. The review covers accessible posts, not the full Facebook archive. See [content evidence](docs/content-evidence.md).

## Before public launch

- Connect an approved payment provider, server-side payment verification and receipts. Current donation flow prepares mobile-money dial codes and WhatsApp verification requests. Transfers happen on the donor’s phone. No gateway callback, automatic receipt email, recurring debit, or automated mailing list is connected yet.
- Confirm organization legal details, current contacts, beneficiary-photo publication approvals, and publish organization-approved privacy/donation terms.
- Choose hosting and a domain, configure HTTPS and host security headers, and verify media delivery on the chosen host. The included `public/_headers` applies only on hosts that support that format.

No secret keys, browser-session files, raw retrieval evidence, or generated project imagery belong in the repository.
