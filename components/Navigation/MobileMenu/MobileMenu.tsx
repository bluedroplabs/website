"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/Button/Button";
import type { ICTA } from "@/types/cta.types";
import { ChevronRight } from "@/components/Icon/ChevronRight";
import { cn } from "@/utils/classes";

const styles = {
  overlay:
    "fixed inset-0 z-40 flex flex-col bg-page-default pt-[var(--nav-height,3.5rem)] lg:hidden transition-[opacity,transform] duration-300 ease-in-out",
  overlayClosed: "opacity-0 -translate-y-4 pointer-events-none",
  overlayOpen: "opacity-100 translate-y-0",
  nav: "flex flex-1 flex-col overflow-auto px-5",
  link: "flex items-center justify-between gap-4 py-5 text-left text-size-20 font-medium text-default-strong border-b border-border-light last:border-b-0 transition-[opacity,transform] duration-250 ease-out",
  linkClosed: "opacity-0 translate-x-[-0.75rem]",
  linkOpen: "opacity-100 translate-x-0",
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

  return (
    <div
      aria-hidden={!open}
      aria-label="Mobile menu"
      aria-modal="true"
      className={cn(
        styles.overlay,
        open ? styles.overlayOpen : styles.overlayClosed
      )}
      role="dialog"
      style={{ willChange: open ? "opacity, transform" : "auto" }}
    >
      <nav className={styles.nav}>
        {links.map((link, index) => {
          const totalLinks = links.length;
          const reverseIndex = totalLinks - 1 - index;
          return (
            <Button
              key={link.href ?? ""}
              {...link}
              asChild
              className={cn(
                styles.link,
                open ? styles.linkOpen : styles.linkClosed
              )}
              onClick={onClose}
              size="none"
              style={{
                transitionDelay: open
                  ? `${index * 40}ms`
                  : `${reverseIndex * 30}ms`,
              }}
              variant="ghost"
            >
            <Link href={link.href ?? "/"}>
              {link.children}
              <span aria-hidden className={styles.linkIcon}>
                <ChevronRight />
              </span>
            </Link>
          </Button>
          );
        })}
      </nav>
    </div>
  );
};
