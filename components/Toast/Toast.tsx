"use client";

import { cn } from "@/utils/classes";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  onDismiss: () => void;
  duration?: number;
}

export function Toast({ message, onDismiss, duration = 4000 }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 10);
    const exitTimer = setTimeout(() => setVisible(false), duration - 300);
    const dismissTimer = setTimeout(onDismiss, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(dismissTimer);
    };
  }, [duration, onDismiss]);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 border border-[var(--color-border-light-inverse)] bg-[var(--color-button-default-bg)] px-5 py-4 shadow-lg transition-all duration-300 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <span className="text-size-14 font-medium text-[var(--color-button-default-text)]">
        {message}
      </span>
    </div>
  );
}
