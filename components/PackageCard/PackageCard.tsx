"use client";

import { cn } from "@/utils/classes";
import parse from "html-react-parser";
import Image from "next/image";
import { lazy, Suspense } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import type { IPackageCard } from "./PackageCard.types";

const bgStyles = "absolute inset-0 -z-10 size-full";

const bgCommonProps = {
  alt: "",
  fill: true,
  role: "presentation",
};

const iconMap = {
  ProjectDeliveryIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ProjectDeliveryIcon })),
  ),
  StaffAugmentationIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.StaffAugmentationIcon })),
  ),
};

export const PackageCard = ({
  className,
  cta,
  description,
  features,
  featuresIntro,
  icon,
  price,
  priceSuffix,
  title,
  variant,
  ...props
}: IPackageCard) => {
  const isHighlighted = variant === "highlight";
  const Icon = icon ? iconMap[icon as keyof typeof iconMap] : null;

  return (
    <div className={cn("px-6 py-12 relative lg:px-12", className)} {...props}>
      {isHighlighted && (
        <>
          <Image
            {...bgCommonProps}
            className={cn(bgStyles, "max-lg:hidden")}
            src="/assets/package-card-large-bg.webp"
          />
          <Image
            {...bgCommonProps}
            className={cn(bgStyles, "lg:hidden")}
            src="/assets/package-card-small-bg.webp"
          />
        </>
      )}
      <div className="flex flex-col gap-6 h-full relative z-10">
        {Icon && (
          <Suspense fallback={null}>
            <Icon className="size-10 lg:size-12" />
          </Suspense>
        )}
        <h3 className="font-medium text-size-32 lg:text-size-40 tracking-[0.02em]">
          {title}
        </h3>
        <div className="flex flex-col gap-6">
          {description && (
            <p className="font-light text-size-16 lg:text-size-18">
              {parse(description)}
            </p>
          )}
          {price && (
            <p className="text-size-16 lg:text-size-18">
              <strong className="font-semibold text-default-heading text-size-20 lg:text-size-24">
                {price}
              </strong>
              {priceSuffix && (
                <span className="font-light ml-2">{priceSuffix}</span>
              )}
            </p>
          )}
          <div className="flex flex-col gap-3">
            {featuresIntro && (
              <p className="font-light text-size-16 lg:text-size-18">
                {featuresIntro}
              </p>
            )}
            <List className="font-medium" items={features} />
          </div>
        </div>
        <Button
          {...cta}
          className="mt-auto w-full"
          variant={isHighlighted ? "default" : "outline"}
        />
      </div>
    </div>
  );
};
