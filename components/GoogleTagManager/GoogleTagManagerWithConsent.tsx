"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { hasCookieConsent } from "@/components/CookieConsentBanner";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export function GoogleTagManagerWithConsent() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!gtmId) return;

    const loadIfConsented = () => {
      if (hasCookieConsent()) setShouldLoad(true);
    };

    loadIfConsented();

    const handleConsentChange = (e: CustomEvent<"accepted" | "declined">) => {
      if (e.detail === "accepted") setShouldLoad(true);
    };

    window.addEventListener(
      "cookie-consent-change",
      handleConsentChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        "cookie-consent-change",
        handleConsentChange as EventListener,
      );
    };
  }, []);

  if (!gtmId || !shouldLoad) return null;

  return <GoogleTagManager gtmId={gtmId} />;
}
