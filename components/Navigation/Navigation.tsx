"use client";

import { useAppTheme } from "@/hooks/useAppTheme";
import { cn } from "@/utils/classes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import { MenuIcon } from "../Icon/MenuIcon";
import type { INavigation } from "./Navigation.types";

const styles = {
  container:
    "flex items-center justify-between max-w-540 mx-auto px-5 py-3 sticky top-0 bg-page-default w-full z-30 before:absolute before:border-b before:border-border-normal before:w-screen before:bottom-0 before:left-1/2 before:-translate-x-1/2",
  link: "text-interactive-nav",
  list: "flex gap-x-4 xl:gap-x-8",
  logo: "max-w-39.5",
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

  const logoProps = { className: styles.logo, priority: true };

  return (
    <header className={cn(styles.container, className)} {...props}>
      <Link href="/">
        {isDarkMode
          ? darkLogo?.src && <Image {...darkLogo} {...logoProps} />
          : logo?.src && <Image {...logo} {...logoProps} />}
      </Link>

      <nav className="hidden lg:block">
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.href}>
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

      <Button
        {...cta}
        className="hidden lg:block"
        size="lg"
        variant="special"
      />

      <Button className="lg:hidden" size="none" variant="ghost">
        <MenuIcon className="size-8" />
      </Button>
    </header>
  );
};
