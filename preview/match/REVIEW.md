# OpenRemote Match sales-page preview

Owner requested a persuasive sales page leading to the existing payment portal, which then redirects to Match. Initial price confirmed: NGN 25,000 for 12 weeks. The page is staged at /preview/match/, noindex/nofollow, with an explicit design-preview banner. Main job-board navigation and /index.html are untouched.

Checkout is intentionally inactive. Repository and live-bundle review found only the renewal link (NGN 15,000). The initial-purchase URL was requested again with that distinction explained. Never use the renewal URL for new customers. Set MATCH_CHECKOUT_URL only after the exact first-purchase URL is supplied and verified. Preserve existing portal webhook, redirect, purchase-claim, authentication and entitlement logic; no payment integrations have been changed.

Content includes the agreed economic/commute/family pain points, foreign-currency opportunity positioning, personalised matching, saved jobs/tracker, and intended launch resource bundle: CV/cover-letter prompts, outreach templates, field manual, opportunity map, eligibility checklist and daily routine. Resources/matching end after 12 weeks; application tracker persists. Prompts are used in the customer's own AI tool. The UI workflow is explicitly an illustration, not a customer screenshot/testimonial.

Readiness: verify actual resource guides and copy buttons in-app before customer-facing launch; replace workflow illustration with a real paid-account demonstration when available. Paid expiry/renewal enforcement still needs end-to-end verification. No fake testimonials, salary guarantees, match counts or scarcity are used. Real previously approved brand photo only; no generated imagery.

Validation: browser checks at 320, 390, 768 and 1440 px show no horizontal overflow or page errors, working anchors, images and FAQ, and blocked checkout. No payment, matching, CV optimisation, advertising trackers or subscriber collection ran. Standalone embedded images allow the page to be downloaded and reviewed without missing assets.

Production promotion: confirm initial checkout URL, review copy/screens, finish advertised resource content and verify paid access rules, then remove preview notice/noindex and deploy the approved page at /match/ with owner-authorised launch navigation changes. Do not silently remove the existing Coming soon status from the public board.
