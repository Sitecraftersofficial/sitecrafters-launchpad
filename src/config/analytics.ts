// Centralized analytics configuration + a single tracking helper.
// No private credentials here: set VITE_ANALYTICS_ID in the environment.

export const analyticsConfig = {
  measurementId: import.meta.env['VITE_ANALYTICS_ID'] ?? "",
  enabled: Boolean(import.meta.env['VITE_ANALYTICS_ID']),
};

/** Events we care about across the site. */
export type AnalyticsEvent =
  | "pricing_cta_click"
  | "whatsapp_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "portfolio_view"
  | "referral_application";

/**
 * Fire-and-forget event tracking. Falls back to a no-op (dev console)
 * when no analytics ID is configured, so nothing breaks locally.
 */
export function trackEvent(
  event: AnalyticsEvent,
  payload: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (analyticsConfig.enabled && gtag) {
    gtag("event", event, payload);
    return;
  }
  if (import.meta.env.DEV) console.debug("[analytics]", event, payload);
}
