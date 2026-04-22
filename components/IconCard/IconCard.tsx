import { cn } from "@/utils/classes";
import { lazy, Suspense } from "react";
import { ContentBlock } from "../ContentBlock/ContentBlock";
import type { IIconCard } from "./IconCard.types";

const iconMap = {
  AddModIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.AddModIcon })),
  ),
  AlarmIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.AlarmIcon })),
  ),
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
  CalendarTodayIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.CalendarTodayIcon })),
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
  DescriptionIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DescriptionIcon })),
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
  FactCheckIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.FactCheckIcon })),
  ),
  FlowChartIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.FlowChartIcon })),
  ),
  ForumIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ForumIcon })),
  ),
  GppBadIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.GppBadIcon })),
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
  LockIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.LockIcon })),
  ),
  MoonIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.MoonIcon })),
  ),
  PlusIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.PlusIcon })),
  ),
  ReceiptIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.ReceiptIcon })),
  ),
  RocketIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.RocketIcon })),
  ),
  SchoolIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.SchoolIcon })),
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
  SyncIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.SyncIcon })),
  ),
  SystemUpdateIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.SystemUpdateIcon })),
  ),
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
  MonitorHeartIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.MonitorHeartIcon })),
  ),
  DatabaseIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.DatabaseIcon })),
  ),
  TuneIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.TuneIcon })),
  ),
  UpdateIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.UpdateIcon })),
  ),
  BoltIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.BoltIcon })),
  ),
  HistoryIcon: lazy(() =>
    import("../Icon").then((m) => ({ default: m.HistoryIcon })),
  ),
};

export const IconCard = (props: IIconCard) => {
  const {
    description,
    icon,
    iconClassName,
    title,
    variant = "default",
  } = props;
  const Icon = icon && iconMap[icon as keyof typeof iconMap];

  if ((!description && !title) || !Icon) return null;

  if (variant === "inline") {
    return (
      <div className="flex gap-6">
        <Suspense fallback={null}>
          <Icon
            className={cn(
              "size-8 min-w-8 text-icon-default lg:size-10 lg:min-w-10",
              iconClassName,
            )}
          />
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
      iconClassName={iconClassName}
      title={title}
      titleClassName="font-semibold mt-4 lg:mt-6"
      titleTag="h3"
      titleVariant="sm"
    />
  );
};
