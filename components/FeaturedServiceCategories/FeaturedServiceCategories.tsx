"use client";

import { Container } from "@/components/Container/Container";
import { ContentBlock } from "@/components/ContentBlock/ContentBlock";
import { cn } from "@/utils/classes";
import { lazy, Suspense } from "react";
import type { IFeaturedServiceCategories } from "./FeaturedServiceCategories.types";

const iconMap = {
  AccountTreeIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.AccountTreeIcon })),
  ),
  BoltIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.BoltIcon })),
  ),
  BrainIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.BrainIcon })),
  ),
  ChartIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ChartIcon })),
  ),
  CheckBadgeIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.CheckBadgeIcon })),
  ),
  ClockIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ClockIcon })),
  ),
  CodeBlockIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.CodeBlockIcon })),
  ),
  DataIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DataIcon })),
  ),
  DevUpdateIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DevUpdateIcon })),
  ),
  HistoryIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.HistoryIcon })),
  ),
  LinkIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.LinkIcon })),
  ),
  ShieldLockIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ShieldLockIcon })),
  ),
  SpeedIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.SpeedIcon })),
  ),
  StackedIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.StackedIcon })),
  ),
  SwapIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.SwapIcon })),
  ),
};

function getGridColsClass(count: number): string {
  if (count >= 4) return "md:grid-cols-2 lg:grid-cols-4";
  if (count === 3) return "md:grid-cols-2 lg:grid-cols-3";
  if (count === 2) return "md:grid-cols-2";
  return "";
}

export const FeaturedServiceCategories = ({
  className,
  description,
  eyebrow,
  groups,
  title,
  ...props
}: IFeaturedServiceCategories) => {
  return (
    <Container
      className={cn(
        "border-t border-border-normal bg-page-default mx-auto",
        className,
      )}
      noPadding
      {...props}
    >
      <div className="max-w-[var(--breakpoint-2xl)] mx-auto">
        <div className="px-6 py-12 lg:px-16 lg:pb-12 lg:pt-25">
          <ContentBlock
            className="lg:items-end"
            description={description}
            descriptionClassName="mt-5"
            eyebrow={eyebrow}
            eyebrowClassName="mb-4"
            eyebrowVariant="highlight"
            title={title}
            variant="inline"
          />
        </div>
      </div>

      {groups.map((group, groupIndex) => (
        <div className="border-t border-border-normal" key={groupIndex}>
          <div className="max-w-[var(--breakpoint-2xl)] mx-auto border-x border-border-normal">
            <div className="px-6 py-12 lg:px-16 lg:py-16">
              <ContentBlock
                className="lg:items-end"
                description={group.description}
                descriptionClassName="mt-5"
                title={group.title}
                titleVariant="xl"
                variant="inline"
              />
            </div>

            <div
              className={cn(
                "grid grid-cols-1 gap-y-10 px-6 pb-12 lg:gap-x-10 lg:gap-y-12 lg:px-16 lg:pb-16",
                getGridColsClass(group.items.length),
              )}
            >
              {group.items.map((item, itemIndex) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];

                return (
                  <div className="flex flex-col gap-6" key={itemIndex}>
                    {Icon && (
                      <Suspense fallback={null}>
                        <Icon className="size-10 text-icon-default" />
                      </Suspense>
                    )}
                    <h3 className="font-semibold text-size-20 leading-[1.25] text-default-heading">
                      {item.title}
                    </h3>
                    <ul className="flex flex-col gap-3 font-light text-size-16 leading-[1.5] text-default-base">
                      {item.features.map((feature, featureIndex) => (
                        <li
                          className="flex gap-3 pl-1 relative before:absolute before:top-[0.5em] before:size-2 before:bg-brand-sky-blue before:left-0"
                          key={featureIndex}
                        >
                          <span className="pl-5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};
