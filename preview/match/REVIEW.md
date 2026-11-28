# OpenRemote Match sales-page preview

Owner requested a persuasive sales page leading to the existing payment portal, which then redirects to Match. Initial price confirmed: NGN 25,000 for 12 weeks. The page is staged at /preview/match/, noindex/nofollow, with an explicit design-preview banner. Main job-board navigation and /index.html are untouched.

The owner supplied the initial-purchase URL on 20 November 2026: https://paystack.com/buy/openremote-match-frrtvd (NGN 25,000), stating it was tested earlier but is not live. MATCH_CHECKOUT_URL now stores that exact URL. MATCH_CHECKOUT_ENABLED stays false: preview clicks show a clear not-live notice and cannot initiate checkout. The renewal URL is not used. Enable only when the owner confirms checkout is live and authorises taking payments. Preserve existing portal webhook, redirect, purchase-claim, authentication and entitlement logic; no payment integrations or Paystack settings have been changed. No transaction was attempted.

Content includes the agreed economic/commute/family pain points, foreign-currency opportunity positioning, personalised matching, saved jobs/tracker, and intended launch resource bundle: CV/cover-letter prompts, outreach templates, field manual, opportunity map, eligibility checklist and daily routine. Resources/matching end after 12 weeks; application tracker persists. Prompts are used in the customer's own AI tool. The UI workflow is explicitly an illustration, not a customer screenshot/testimonial.

Readiness: verify actual resource guides and copy buttons in-app before customer-facing launch; replace workflow illustration with a real paid-account demonstration when available. Paid expiry/renewal enforcement still needs end-to-end verification. No fake testimonials, salary guarantees, match counts or scarcity are used. Real previously approved brand photo only; no generated imagery.

Validation: browser checks at 320, 390, 768 and 1440 px show no horizontal overflow or page errors, working anchors, images and FAQ, and blocked checkout. No payment, matching, CV optimisation, advertising trackers or subscriber collection ran. Standalone embedded images allow the page to be downloaded and reviewed without missing assets.

Production promotion: confirm initial checkout URL, review copy/screens, finish advertised resource content and verify paid access rules, then remove preview notice/noindex and deploy the approved page at /match/ with owner-authorised launch navigation changes. Do not silently remove the existing Coming soon status from the public board.

Owner review: remove price from the opening and mobile sticky bar. Price is first disclosed in the offer section after the benefit/resource sections, then repeated near the closing CTA.

Owner copy revision: removed the explanatory paragraph under the resource cards and replaced em dashes with ordinary punctuation or bullets throughout the page.

Owner copy revision: the audience section welcomes first-job seekers, career changers, returners and people seeking better opportunities. It does not promise suitable vacancies for every profile or claim to provide skills training.

## Sales-page proof and clarity update, 23 November 2026

Owner authorised improving the existing preview and adding the approved clearer demonstration. The demo is served locally from assets/, before the first price, with native playback/fullscreen controls, preload=none, poster, English captions and a text walkthrough. Raw recordings and private paid PDFs/prompts are not published. Only the edited privacy-reviewed product demonstration and a short owner-authorised outreach excerpt are public.

Retained the economic/commute/family opening and the first-job/career-change audience. Replaced mock dashboard blocks with concise steps. Clarified that the free board already screens location eligibility; paid Match adds profile relevance, fit explanations, application resources and tracking. Added a clearly fictional beginner-friendly CV illustration, an outreach excerpt, current product expectations, payment-to-access steps, support contact and direct access CTAs. No invented testimonials, match quotas, urgency, inflated prices, placement promises or daily refresh claims.

Current support address: rachel@openremote.net, updated at the owner’s request on 28 November 2026. A no-questions seven-day refund promise was not adopted: the owner raised concerns about consumption of digital features. Owner approved the narrower policy on 23 November 2026: no change-of-mind refunds once paid matching/resources have been used; duplicate charges and unresolved access issues reviewed for correction/refund; applicable legal rights retained. The approved wording is visible beside the offer, with a FAQ linking to the full policy. No automatic refund flow is implemented by this sales-page change.

Launch remains gated: initial Paystack checkout is still disabled, noindex/nofollow retained, main job-board navigation unchanged. Daily/post-import paid matching is not enabled, so the page does not promise daily updates, email notifications or a first-match deadline. Confirm and implement the customer-facing matching cadence before launch. Verify paid-account reader return flow, access expiry/renewal and payment-to-account claiming separately. Any refund policy also needs an operational process for reviewing charges/access and ending refunded paid access; this static preview does not implement refunds.

Validation for this revision: Chromium at 320, 390, 768 and 1440 px: no horizontal overflow, complete images, valid section links, working FAQ and video playback (1280x800, 51.92 seconds), no page errors, price first appears after demo, no visible em dashes and checkout blocked. Additional mobile check confirms approved refund policy, working refund anchors, no seven-day refund promise, and both purchase links remain pointed at the disabled-checkout notice. Video remains preload=none until requested.
