# Donations and email setup

## Implemented

The donation dialog uses the organization's supplied recipients. EVC Plus, ZAAD and Sahal prepare an amount-filled `tel:` link and a selectable/copyable code. The donor reviews and confirms the transfer on their phone. A browser cannot establish that a USSD transfer succeeded.

- EVC: recipient `616666744`, transfer template `*712*number*amount#`. Hormuud's own [prefix announcement](https://hormuud.com/Updates) documents this format for 61/77 numbers.
- ZAAD: `*880*0616666744*amount#`, supplied by SCO and consistent with [Telesom's ZAAD instructions](https://ftp.telesom.net/personal/zaad?lang=en).
- Sahal: `*883*0616666744*amount#`, supplied by SCO. Do not substitute merchant/withdrawal codes for this recipient.
- M-Pesa: `0712828308`, account name `Abdullahi Mahamed`. Country/currency and merchant API are not established. No USD/KES conversion or invented direct-transfer URL is applied.
- E-Dahab: `0626666744`. No direct-transfer template has been approved, so the number is copyable with instructions to use the service's transfer menu.
- WhatsApp: `https://wa.me/252616666744`, with the selected program, amount and payment method in a draft message. The donor decides whether to send it.

[Apple documents restrictions on phone links containing star/hash characters](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/PhoneLinks/PhoneLinks.html), so every generated code has a copy fallback. Phone/operator behavior still needs a real-device check; automated QA does not place calls or send money.

## Minimums

`src/giving-programs.json` configures each program independently. Voluntary sadaqah retains the pre-existing technical minimum of USD 0.50 until SCO specifies its program rates. These are donation-policy settings, not claims about a religious minimum. Selection resets the amount to that program's minimum; lower amounts cannot produce an actionable transfer code. Zakat al-Fitr has no invented rate: donors are directed to ask SCO until its current per-person amount is supplied.

## Current receipt/update flow

Donors can enter a payment reference, an optional receipt email, and a separate unchecked request for new-round emails. The website prepares a verification request on WhatsApp; it does not submit it automatically, store it in a donor database, or claim the donation was verified. Email preferences are cleared when the dialog opens again. No automated email service or active mailing list is connected.

## Required to activate automated email

1. SCO supplies its sending address/domain and email service. Domain verification and provider credentials must be configured securely in the backend; credentials must never enter frontend code or this repository.
2. Decide how payments are verified: a merchant-provider callback with signature verification, or an authenticated SCO staff confirmation after checking transaction records. Opening a dialer, returning to the page or submitting a reference cannot mark a payment paid.
3. Persist donation and consent records in the selected production database, restrict staff access, and deduplicate confirmations using provider transaction IDs. Send one thank-you per confirmed donation.
4. Activate update subscriptions only after the donor confirms their email. Announcements go only to active opted-in subscribers; every announcement includes an unsubscribe link. Opening a new round creates one deduplicated campaign event.

The sender/provider, confirmed program minimums, Zakat al-Fitr rate, and payment-confirmation integration are awaiting SCO's answers. This document records implementation boundaries; it is not an active email backend.

## Draft thank-you email

Subject: Thank you for supporting {program} — SCO

Salaam {name},

Thank you for your donation of {amount} to {program}. We have confirmed receipt of your donation. Your support helps us continue this work.

Donation reference: {reference}

Jazaakallahu khayran,
Somali Charity Organization

Only send this message after verification. Escape donor-supplied values when rendering HTML.

## Draft new-round email

Subject: A new {program} donation round is open — SCO

Salaam {name},

Our next {program} donation round is now open. Visit {roundUrl} to see the work planned for this round and the ways you can contribute.

Thank you for supporting SCO.

Somali Charity Organization

You received this because you asked for new-round updates. Unsubscribe: {unsubscribeUrl}

## SCO decisions recorded on 12 November 2026

Program minimums will be decided later. Current sadaqah amounts are provisional starting amounts. Domain selection and the sending email account/provider purchase are also deferred. Do not activate or represent an automated mailing list or receipt service until these choices and payment verification are connected. Sahal recipient/template was reconfirmed exactly as documented above. M-Pesa number was reconfirmed without a currency/country decision.
