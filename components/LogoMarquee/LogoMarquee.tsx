"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import { useAppTheme } from "@/hooks/useAppTheme";
import Image from "next/image";
import { lazy, useLayoutEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import type { ILogoMarquee, ILogoIcon } from "./LogoMarquee.types";

const logoIconMap = {
  StackerIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.StackerIcon })),
  ),
  PowdrIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.PowdrIcon })),
  ),
  MtmIcon: lazy(() => import("../Icon").then((m) => ({ default: m.MtmIcon }))),
  RothlivingIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.RothlivingIcon })),
  ),
  ZionIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ZionIcon })),
  ),
  ZulaIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ZulaIcon })),
  ),
} as const;

const isLogoIcon = (logo: ILogoMarquee["logos"][number]): logo is ILogoIcon =>
  "icon" in logo && !!logo.icon;

export const LogoMarquee = ({
  className,
  description,
  logos,
  ...props
}: ILogoMarquee) => {
  const { isDarkMode } = useAppTheme();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  const updateScroll = () => {
    if (!marqueeRef.current || !contentRef.current) return;
    const { offsetWidth } = marqueeRef.current;
    const { scrollWidth } = contentRef.current;
    setShouldScroll(offsetWidth < scrollWidth);
  };

  useLayoutEffect(() => {
    updateScroll();
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("resize", updateScroll);
    };
  }, [logos]);

  const validLogos = logos.filter(
    (logo) => isLogoIcon(logo) || ("src" in logo && logo.src),
  );
  if (validLogos.length === 0) return null;

  const renderLogos = (extraClass = "") => (
    <div
      className={cn("flex gap-x-12 items-center", extraClass)}
      ref={contentRef}
    >
      {validLogos.map((logo, idx) => (
        <div className="flex items-center" key={logo.alt || idx}>
          {isLogoIcon(logo) ? (
            (() => {
              const IconComponent =
                logoIconMap[logo.icon as keyof typeof logoIconMap];
              return IconComponent ? (
                <IconComponent
                  aria-label={logo.alt}
                  className="h-12 w-auto min-w-fit opacity-75 object-contain text-current"
                  style={{
                    width: logo.width ?? 179,
                    height: logo.height ?? 50,
                  }}
                />
              ) : null;
            })()
          ) : (
            <Image
              alt={logo.alt || "Logo"}
              className="object-contain h-12 w-auto min-w-fit opacity-75"
              height={logo.height || 50}
              priority={logo.priority}
              src={isDarkMode && logo.srcLight ? logo.srcLight : logo.src}
              width={logo.width || 120}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <Container
      className={cn("py-16 text-center", className)}
      noPadding
      {...props}
    >
      {description && (
        <p className="mb-8.5 font-mono text-sm uppercase">{description}</p>
      )}
      <div
        className="overflow-x-hidden w-full [&>div.rfm-marquee-container]:gap-x-12"
        ref={marqueeRef}
      >
        {shouldScroll ? (
          <Marquee gradient={false} pauseOnHover speed={40}>
            {renderLogos()}
          </Marquee>
        ) : (
          renderLogos("justify-center")
        )}
      </div>
    </Container>
  );
};
