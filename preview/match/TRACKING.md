# Match page tracking

Uses existing Meta dataset 1127164330210426. `match-tracking.js` defaults to no advertising tracking; permission is explicit, revocable, shared with the Match app and overridden by GPC. It sends PageView and ViewContent after permission and InitiateCheckout only when an approved enabled live checkout link is clicked. It never sends Purchase.

Checkout remains disabled in this preview. Canonical publication/enabling is a separate launch action. Purchase tracking is implemented in the application repository through an authenticated Edge Function that verifies Paystack live payments. See app docs/launch/match-meta-tracking.md for the consolidated setup and limitations.

Tests use jsdom supplied by a separate runtime, without adding site/application dependencies:
`JSDOM_MODULE=/path/to/jsdom/lib/api.js node --test preview/match/match-tracking.test.mjs`

No browser tag is loaded on private app pages. Email/auth query strings or unsafe referrers suppress this public tag. Campaign parameters are collected only with permission, whitelisted and length-limited. Consent cookie lasts 180 days; first-touch campaign cookie lasts 30 days. No campaign is invented when absent.
