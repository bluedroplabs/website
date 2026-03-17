"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import { forwardRef } from "react";

export interface TurnstileWidgetProps {
  onSuccess: (token: string) => void;
  onExpire?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact" | "flexible";
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export const TurnstileWidget = forwardRef<
  TurnstileInstance | undefined,
  TurnstileWidgetProps
>(function TurnstileWidget(
  { onSuccess, onExpire, theme = "auto", size = "compact" },
  ref,
) {
  if (!siteKey) return null;

  return (
    <Turnstile
      onExpire={onExpire}
      onSuccess={onSuccess}
      options={{ size, theme }}
      ref={ref}
      siteKey={siteKey}
    />
  );
});
