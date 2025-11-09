import type { IPackageCard } from "./PackageCard.types";

const PACKAGE_CARD_DEFAULT_PROPS: IPackageCard = {
  description: "Everything in Standard, plus:",
  title: "Enhanced",
  features: [
    "Development, staging, and production environments",
    "Automated backups",
    "Advanced monitoring",
    "Priority support SLA",
  ],
  cta: {
    children: "Start with Enhanced",
    href: "/",
  },
  variant: "highlight",
};

export const PACKAGE_CARD_EXAMPLE_PROPS = {
  default: PACKAGE_CARD_DEFAULT_PROPS,
};
