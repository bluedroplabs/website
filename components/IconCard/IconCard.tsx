import { lazy, Suspense } from "react";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { IIconCard } from "./IconCard.types";

const iconMap = {
  ArrowRightDownIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ArrowRightDownIcon })),
  ),
  BrainIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.BrainIcon })),
  ),
  BillsIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.BillsIcon })),
  ),
  BugIcon: lazy(() => import("../Icon").then((m) => ({ default: m.BugIcon }))),
  ChartIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ChartIcon })),
  ),
  CheckBadgeIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.CheckBadgeIcon })),
  ),
  ClockIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ClockIcon })),
  ),
  DataIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DataIcon })),
  ),
  DomainDisabledIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DomainDisabledIcon })),
  ),
  EmergencyIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.EmergencyIcon })),
  ),
  ExpenseIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ExpenseIcon })),
  ),
  LaptopIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.LaptopIcon })),
  ),
  HostIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.HostIcon })),
  ),
  MoonIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.MoonIcon })),
  ),
  PlusIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.PlusIcon })),
  ),
  SpeedIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.SpeedIcon })),
  ),
  ShakeHandsIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ShakeHandsIcon })),
  ),
  StackedIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.StackedIcon })),
  ),
  StressIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.StressIcon })),
  ),
  SunIcon: lazy(() => import("../Icon").then((m) => ({ default: m.SunIcon }))),
  WarningIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.WarningIcon })),
  ),
};

export const IconCard = (props: IIconCard) => {
  const { description, icon, title, variant = "default" } = props;
  const Icon = icon && iconMap[icon as keyof typeof iconMap];

  if ((!description && !title) || !Icon) return null;

  if (variant === "inline") {
    return (
      <div className="flex gap-6">
        <Suspense fallback={null}>
          <Icon className="size-8 min-w-8 text-icon-default lg:size-12 lg:min-w-12" />
        </Suspense>
        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-default-heading lg:text-size-24">
            {title}
          </h3>
          <p className="font-light lg:text-lg">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <ContentBlock
      description={description}
      descriptionClassName="mt-2"
      Icon={(props) => (
        <Suspense fallback={null}>
          <Icon {...props} />
        </Suspense>
      )}
      title={title}
      titleClassName="font-semibold mt-4 lg:mt-6"
      titleTag="h3"
      titleVariant="sm"
    />
  );
};
