"use client";

import { useAppTheme } from "@/hooks/useAppTheme";
import { cn } from "@/utils/classes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button/Button";
import { CloseIcon } from "../Icon/CloseIcon";
import { MenuIcon } from "../Icon/MenuIcon";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import type { INavigation } from "./Navigation.types";

const styles = {
  container:
    "flex min-h-16 items-center justify-between max-w-540 mx-auto px-5 py-3 max-sm:py-0 max-sm:pr-0 sticky top-0 bg-page-default w-full z-50 before:absolute before:border-b before:border-border-normal before:w-screen before:bottom-0 before:left-1/2 before:-translate-x-1/2",
  link: "text-interactive-nav font-normal",
  list: "flex gap-x-4 xl:gap-x-8",
  logo: "h-8 max-w-39.5 relative w-full lg:h-9",
};

export const Navigation = ({
  className,
  cta,
  links,
  logo,
  darkLogo,
  ...props
}: INavigation) => {
  const { isDarkMode } = useAppTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoProps = { fill: true, priority: true };

  return (
    <>
      <header className={cn(styles.container, className)} {...props}>
        <Link
          aria-label="Blue Drop Labs - Home"
          className={styles.logo}
          href="/"
        >
          {isDarkMode
            ? darkLogo?.src && <Image {...darkLogo} {...logoProps} />
            : logo?.src && <Image {...logo} {...logoProps} />}
        </Link>

        <nav className="hidden lg:block">
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.href ?? ""}>
                <Button
                  {...link}
                  className={styles.link}
                  size="none"
                  variant="ghost"
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            size="none"
            variant="ghost"
          >
            {isMenuOpen ? (
              <CloseIcon className="size-6 text-default-strong [&_path]:fill-current" />
            ) : (
              <MenuIcon className="size-6 [&_path]:fill-current" />
            )}
          </Button>

          <Button
            {...cta}
            className={cn(
              "max-lg:flex max-lg:min-w-14 max-lg:flex-col max-lg:px-4 max-lg:py-3 max-lg:leading-tight max-lg:whitespace-normal max-lg:w-24",
            )}
            size="lg"
            variant="special"
          />
        </div>
      </header>

      <MobileMenu
        links={links}
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
      />
    </>
  );
};
