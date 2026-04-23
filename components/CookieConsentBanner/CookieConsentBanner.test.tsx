import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { CookieConsentBanner } from "./CookieConsentBanner";
import { COOKIE_CONSENT_KEY } from "./cookieConsent";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("CookieConsentBanner", () => {
  it("renders the banner when no consent has been recorded", () => {
    render(<CookieConsentBanner />);

    expect(
      screen.getByRole("dialog", { name: /cookie consent/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Allow" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Disallow" }),
    ).toBeInTheDocument();
  });

  it("does not render when consent is already 'accepted'", () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    render(<CookieConsentBanner />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("does not render when consent is already 'declined'", () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    render(<CookieConsentBanner />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("stores 'accepted' and dispatches the change event when Allow is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    window.addEventListener("cookie-consent-change", onChange);

    render(<CookieConsentBanner />);
    await user.click(screen.getByRole("button", { name: "Allow" }));

    expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBe("accepted");
    expect(onChange).toHaveBeenCalledOnce();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    window.removeEventListener("cookie-consent-change", onChange);
  });

  it("stores 'declined' and dispatches the change event when Disallow is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    window.addEventListener("cookie-consent-change", onChange);

    render(<CookieConsentBanner />);
    await user.click(screen.getByRole("button", { name: "Disallow" }));

    expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBe("declined");
    expect(onChange).toHaveBeenCalledOnce();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    window.removeEventListener("cookie-consent-change", onChange);
  });

  it("links to the cookies section of the privacy policy", () => {
    render(<CookieConsentBanner />);

    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).toHaveAttribute("href", "/privacy-policy#cookies");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<CookieConsentBanner />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
