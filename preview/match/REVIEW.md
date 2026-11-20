# OpenRemote Match sales-page preview

Owner requested a persuasive sales page leading to the existing payment portal, which then redirects to Match. Initial price confirmed: NGN 25,000 for 12 weeks. The page is staged at /preview/match/, noindex/nofollow, with an explicit design-preview banner. Main job-board navigation and /index.html are untouched.

The owner supplied the initial-purchase URL on 20 November 2026: https://paystack.com/buy/openremote-match-frrtvd (NGN 25,000), stating it was tested earlier but is not live. MATCH_CHECKOUT_URL now stores that exact URL. MATCH_CHECKOUT_ENABLED stays false: preview clicks show a clear not-live notice and cannot initiate checkout. The renewal URL is not used. Enable only when the owner confirms checkout is live and authorises taking payments. Preserve existing portal webhook, redirect, purchase-claim, authentication and entitlement logic; no payment integrations or Paystack settings have been changed. No transaction was attempted.

Content includes the agreed economic/commute/family pain points, foreign-currency opportunity positioning, personalised matching, saved jobs/tracker, and intended launch resource bundle: CV/cover-letter prompts, outreach templates, field manual, opportunity map, eligibility checklist and daily routine. Resources/matching end after 12 weeks; application tracker persists. Prompts are used in the customer's own AI tool. The UI workflow is explicitly an illustration, not a customer screenshot/testimonial.

Readiness: verify actual resource guides and copy buttons in-app before customer-facing launch; replace workflow illustration with a real paid-account demonstration when available. Paid expiry/renewal enforcement still needs end-to-end verification. No fake testimonials, salary guarantees, match counts or scarcity are used. Real previously approved brand photo only; no generated imagery.

Validation: browser checks at 320, 390, 768 and 1440 px show no horizontal overflow or page errors, working anchors, images and FAQ, and blocked checkout. No payment, matching, CV optimisation, advertising trackers or subscriber collection ran. Standalone embedded images allow the page to be downloaded and reviewed without missing assets.

Production promotion: confirm initial checkout URL, review copy/screens, finish advertised resource content and verify paid access rules, then remove preview notice/noindex and deploy the approved page at /match/ with owner-authorised launch navigation changes. Do not silently remove the existing Coming soon status from the public board.

Owner review: remove price from the opening and mobile sticky bar. Price is first disclosed in the offer section after the benefit/resource sections, then repeated near the closing CTA.

Owner copy revision: removed the explanatory paragraph under the resource cards and replaced em dashes with ordinary punctuation or bullets throughout the page.
