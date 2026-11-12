# SCO improvement roadmap

Decisions below were explicitly deferred by SCO on 12 November 2026. Keep these items in the project until the organization supplies its choices.

## Program donation minimums

- Decide rates independently for general sadaqah, water, education/orphan care, Ramadan iftar and Eid support.
- Confirm the current Zakat al-Fitr amount per person separately.
- Configuration lives in `src/giving-programs.json`. Current USD 0.50 sadaqah values have `minimumStatus: provisional`; they are technical starting amounts carried over from the existing website. Zakat al-Fitr remains pending.
- When rates are approved, update the configuration, minimum labels and acceptance tests together. A future backend must enforce the same rules.

## Domain and email

- SCO will choose its domain and decide which email account/provider to purchase later.
- Connect a verified sending domain/address and the selected production email service.
- Thank-you emails should follow a verified provider transaction or an authenticated staff confirmation, once per donation.
- New-round email announcements require a confirmed email subscription, separate donor consent and working unsubscribe links.
- Current receipt/update requests are WhatsApp drafts only. No automated emails or subscription database are active.
- Draft copy and verification requirements are in `docs/donations-and-email.md`.

## Payment improvements

- Keep SCO's confirmed recipient numbers and exact Sahal/ZAAD templates configurable.
- Confirm M-Pesa's country/currency and obtain approved E-Dahab transfer instructions before adding further direct-transfer behavior.
- Add merchant-provider callbacks or an authenticated staff verification screen, with transaction deduplication, before automated receipts.
- Test dialer behavior with real Android/iPhone devices and each relevant SIM. Keep copy-code and copy-number alternatives.

## Future campaign management

Provide staff controls for opening a donation round, updating its program minimum, uploading media and publishing progress. Announcements should be triggered by a published round, with duplicate-send protection. These capabilities are planned improvements, not active features.
