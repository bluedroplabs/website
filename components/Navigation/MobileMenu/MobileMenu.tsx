"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/Button/Button";
import { ArrowRightIcon } from "@/components/Icon/ArrowRightIcon";
import type { ICTA } from "@/types/cta.types";

const styles = {
  overlay:
    "fixed inset-0 z-40 flex flex-col bg-page-default pt-[var(--nav-height,3.5rem)] lg:hidden",
  nav: "flex flex-1 flex-col overflow-auto px-5",
  link: "flex items-center justify-between gap-4 py-5 text-left text-size-20 font-medium text-default-strong border-b border-border-light last:border-b-0",
  linkIcon:
    "flex size-10 shrink-0 items-center justify-center rounded bg-default-strong text-white [&_svg]:size-5",
};

export interface IMobileMenu {
  links: ICTA[];
  onClose: () => void;
  open: boolean;
}

export const MobileMenu = ({ links, onClose, open }: IMobileMenu) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      aria-label="Mobile menu"
      aria-modal="true"
      className={styles.overlay}
      role="dialog"
    >
      <nav className={styles.nav}>
        {links.map((link) => (
          <Button
            key={link.href ?? ""}
            {...link}
            asChild
            className={styles.link}
            onClick={onClose}
            size="none"
            variant="ghost"
          >
            <Link href={link.href ?? "/"}>
              {link.children}
              <span aria-hidden className={styles.linkIcon}>
                <ArrowRightIcon />
              </span>
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  );
};
