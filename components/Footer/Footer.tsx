"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";

import { themeIconMap, themes } from "@/contants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useIsMounted } from "@/hooks/useIsMounted";
import Image from "next/image";
import { Button } from "../Button/Button";
import { ArrowRightDownIcon } from "../Icon";
import type { IFooter } from "./Footer.types";

const styles = {
  container: "lg:py-12 xl:py-16 space-y-12",
  content:
    "max-lg:space-y-12 lg:col-span-full lg:flex lg:gap-x-20 xl:col-span-8 xl:justify-between",
  copyright: "text-default-light uppercase",
  description: "font-light leading-6 text-default-strong",
  input:
    "text-default-light leading-none h-5 w-full placeholder:text-default-light focus:outline-none bg-transparent lg:max-xl:text-sm",
  inputGroup:
    "bg-surface-input border-b border-border-strong flex gap-2.5 mt-6 px-5 py-4.5 lg:max-xl:px-3",
  logo: "max-h-8.75 mb-6",
  nav: "flex gap-x-5 gap-y-8 max-lg:flex-wrap max-lg:pr-6 lg:gap-x-20 xl:w-[49.52%] xl:justify-between",
  links: "mt-6 space-y-3.5",
  secondaryText: "font-mono font-medium uppercase mt-6",
  submitButton: "uppercase font-medium lg:max-xl:text-sm",
  title: "leading-none text-default-light uppercase",
  themeButton: "size-6 text-default-light uppercase",
  themeButtons: "flex gap-2 items-center",
  themeGroup: "flex justify-between gap-x-8 max-lg:mt-8 lg:max-xl:w-full",
  themeIcon: (isActive: boolean) =>
    cn("size-4.5", isActive ? "text-icon-default" : "text-icon-inactive"),
  themeItem: "flex items-center",
};

export const Footer = ({
  className,
  copyright,
  darkLogo,
  description,
  formAction,
  formDescription,
  formHeading,
  logo,
  primaryLinks,
  secondaryText,
  utilityLinks,
  ...props
}: IFooter) => {
  const { theme, setTheme, isDarkMode } = useAppTheme();
  const isMounted = useIsMounted();

  return (
    <Container
      asChild
      className={cn(styles.container, className)}
      displays={{ lg: "grid" }}
      {...props}
    >
      <footer>
        <div className="lg:col-span-full xl:col-span-4">
          {isDarkMode
            ? darkLogo?.src && <Image {...darkLogo} className={styles.logo} />
            : logo?.src && <Image {...logo} className={styles.logo} />}
          <p className={styles.description}>{description}</p>
          <p className={styles.secondaryText}>{secondaryText}</p>
        </div>
        <div className={styles.content}>
          <nav className={styles.nav}>
            {primaryLinks?.map(({ links, title }) => (
              <div className="max-lg:min-w-32.5" key={title}>
                <h2 className={styles.title}>{title}</h2>
                <ul aria-label={title} className={styles.links}>
                  {links?.map((link) => (
                    <li key={link.href}>
                      <Button
                        {...link}
                        className="lg:max-xl:text-sm"
                        size="none"
                        variant="ghost"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <form action={formAction} className="lg:w-full xl:w-[50.47%]">
            <h2 className={styles.title}>{formHeading}</h2>
            <p
              className={cn(
                "mt-4 lg:mt-5.5 lg:max-xl:text-sm",
                styles.description,
              )}
            >
              {formDescription}
            </p>
            <div className={styles.inputGroup}>
              <input
                aria-label="Email address"
                className={styles.input}
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                className={styles.submitButton}
                size="none"
                type="submit"
                variant="ghost"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <div className="col-span-full lg:flex lg:gap-5 lg:justify-between lg:items-end lg:mt-5 lg:max-xl:flex-wrap xl:items-center">
          <p className={cn("max-xl:hidden", styles.copyright)}>{copyright}</p>
          <nav
            className={cn("lg:max-xl:w-full xl:ml-auto xl:mr-10", styles.nav)}
          >
            <ul
              aria-label="Legal and company information"
              className="max-lg:space-y-6 lg:flex lg:gap-x-6 lg:w-full xl:gap-x-10  xl:justify-end"
            >
              {utilityLinks?.map((link) => (
                <li key={link.href}>
                  <Button
                    {...link}
                    className="text-default-light uppercase"
                    size="none"
                    variant="ghost"
                  >
                    {link.children} <ArrowRightDownIcon className="size-3" />
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.themeGroup}>
            <p className={cn("xl:hidden", styles.copyright)}>{copyright}</p>
            <nav>
              <ul className={styles.themeButtons}>
                {themes.map((t) => {
                  const Icon = themeIconMap[t];
                  const isActive = isMounted && t === theme;

                  return (
                    <li className={styles.themeItem} key={t}>
                      <Button
                        className={styles.themeButton}
                        onClick={() => setTheme(t)}
                        size="none"
                        variant="ghost"
                      >
                        <Icon className={styles.themeIcon(isActive)} />
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </Container>
  );
};
