export const COOKIE_CONSENT_KEY = "cookie-consent";

export type CookieConsentStatus = "accepted" | "declined" | null;

export function getCookieConsent(): CookieConsentStatus {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (stored === "accepted" || stored === "declined") return stored;
  return null;
}

/**
 * Returns true if cookies are allowed. Cookies load by default; only blocked
 * when the user has explicitly opted out (declined).
 */
export function hasCookieConsent(): boolean {
  const consent = getCookieConsent();
  return consent !== "declined";
}

export function setCookieConsent(status: "accepted" | "declined"): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", { detail: status }),
  );
}
