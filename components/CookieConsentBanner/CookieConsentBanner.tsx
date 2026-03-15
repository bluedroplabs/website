"use client";

import { Button } from "@/components/Button/Button";
import { cn } from "@/utils/classes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "./cookieConsent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const consent = getCookieConsent();
    setVisible(consent === null);
  }, [mounted]);

  const handleChoice = (status: "accepted" | "declined") => {
    setCookieConsent(status);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      aria-label="Cookie consent"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border-normal bg-[var(--color-page-default)] px-6 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]",
      )}
      role="dialog"
    >
      <div className="mx-auto flex max-w-[var(--breakpoint-2xl)] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-size-14 leading-relaxed text-default-strong sm:text-size-16">
          We use cookies to improve your experience and analyze site traffic. By
          clicking &quot;Allow,&quot; you consent to our use of cookies.{" "}
          <Link
            className="text-brand-aqua underline hover:text-brand-light-blue"
            href="/privacy-policy#cookies"
          >
            Learn more
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <Button
            onClick={() => handleChoice("declined")}
            size="default"
            variant="outline"
          >
            Disallow
          </Button>
          <Button onClick={() => handleChoice("accepted")} variant="default">
            Allow
          </Button>
        </div>
      </div>
    </div>
  );
}
