"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ICTA } from "@/types/cta.types";
import { ChevronRight } from "@/components/Icon/ChevronRight";
import { cn } from "@/utils/classes";

const styles = {
  overlay:
    "fixed inset-0 z-40 flex flex-col bg-page-default pt-[var(--nav-height,4rem)] lg:hidden",
  overlayClosed: "opacity-0 pointer-events-none",
  overlayOpen: "opacity-100",
  nav: "flex flex-1 flex-col ",
  link: "flex items-center justify-between gap-4 py-5 text-left text-size-20 font-medium text-default-strong border-b border-border-light [backface-visibility:hidden] [-webkit-font-smoothing:antialiased]",
  linkClosed: "opacity-0",
  linkOpen: "opacity-100",
  linkText:
    "transition-opacity ease-out px-5 flex items-center justify-between w-full",
  linkIcon:
    "flex size-10 shrink-0 items-center justify-center rounded bg-default-strong text-white [&_svg]:size-5 cursor-pointer",
};

export interface IMobileMenu {
  links: ICTA[];
  onClose: () => void;
  open: boolean;
}

export const MobileMenu = ({ links, onClose, open }: IMobileMenu) => {
  const overlayRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    if (open) {
      el.removeAttribute("inert");
    } else {
      el.setAttribute("inert", "");
    }
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      aria-label="Mobile menu"
      aria-modal="true"
      className={cn(
        styles.overlay,
        open ? styles.overlayOpen : styles.overlayClosed,
      )}
      ref={overlayRef}
      role="dialog"
      style={{
        transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: open ? "opacity" : "auto",
      }}
    >
      <nav className={styles.nav}>
        {links.map((link, index) => {
          return (
            <div
              className={cn(styles.link)}
              key={`${link.href ?? ""}-${index}`}
            >
              <div className={styles.linkText}>
                {link.children}{" "}
                <Link
                  aria-label={`${link.children}`}
                  className={styles.linkIcon}
                  href={link.href ?? "/"}
                  onClick={onClose}
                >
                  <ChevronRight />
                </Link>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
