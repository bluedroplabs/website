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
  CodeBlockIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.CodeBlockIcon })),
  ),
  DataIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DataIcon })),
  ),
  DevUpdateIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DevUpdateIcon })),
  ),
  DomainIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DomainIcon })),
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
  FlowChartIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.FlowChartIcon })),
  ),
  HostIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.HostIcon })),
  ),
  LaptopIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.LaptopIcon })),
  ),
  LinkIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.LinkIcon })),
  ),
  MoonIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.MoonIcon })),
  ),
  PlusIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.PlusIcon })),
  ),
  ShakeHandsIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ShakeHandsIcon })),
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
  StressIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.StressIcon })),
  ),
  SunIcon: lazy(() => import("../Icon").then((m) => ({ default: m.SunIcon }))),
  WarningIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.WarningIcon })),
  ),
  SwapIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.SwapIcon })),
  ),
  AccountTreeIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.AccountTreeIcon })),
  ),
  MemoryIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.MemoryIcon })),
  ),
  DatabaseIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DatabaseIcon })),
  ),
  TuneIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.TuneIcon })),
  ),
  BoltIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.BoltIcon })),
  ),
  HistoryIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.HistoryIcon })),
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
          <Icon className="size-8 min-w-8 text-icon-default lg:size-10 lg:min-w-10" />
        </Suspense>
        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-default-heading lg:text-size-20">
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
