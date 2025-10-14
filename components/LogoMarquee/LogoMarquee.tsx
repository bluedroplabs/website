"use client";

import { Container } from "@/components/Container/Container";
import { cn } from "@/utils/classes";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import type { ILogoMarquee } from "./LogoMarquee.types";

export const LogoMarquee = ({
  className,
  description,
  logos,
  ...props
}: ILogoMarquee) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useLayoutEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return;
    const container = marqueeRef.current;
    const content = contentRef.current;
    if (container.offsetWidth < content.scrollWidth) {
      setShouldScroll(true);
    } else {
      setShouldScroll(false);
    }
  }, [logos]);

  const renderLogos = (extraClass = "") => (
    <div
      className={cn(
        "logo-marquee-inner flex gap-x-12 items-center",
        extraClass,
      )}
      ref={contentRef}
    >
      {logos.map((logo, idx) => (
        <div className="flex items-center" key={logo.alt || idx}>
          <Image
            alt={logo.alt || "Logo"}
            className="object-contain h-12 w-auto min-w-fit"
            height={logo.height || 60}
            priority={logo.priority}
            src={logo.src}
            width={logo.width || 120}
          />
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
      <div className="overflow-x-hidden w-full" ref={marqueeRef}>
        {logos &&
          logos.length > 0 &&
          (shouldScroll ? (
            <Marquee gradient={false} pauseOnHover speed={40}>
              {renderLogos()}
            </Marquee>
          ) : (
            renderLogos("justify-center")
          ))}
      </div>
    </Container>
  );
};
