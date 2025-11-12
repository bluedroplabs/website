import type { ISolutionsPackage } from "./SolutionsPackage.types";

const SOLUTIONS_PACKAGE_DEFAULT_PROPS: ISolutionsPackage = {
  eyebrow: "Our Packages",
  footer: {
    items: [
      "<strong>No downtime. No hassle.</strong> We’ll move your website from Pantheon, Acquia, or any other hosting platform for a one-time setup fee.",
    ],
    title: "White-glove migration",
  },
  packages: [
    {
      cta: {
        children: "Start with Standard",
        href: "#",
      },
      features: [
        "Fixed monthly cost",
        "Unlimited bandwidth and visitors",
        "CDN integration",
        "Dedicated Slack support channel",
        "SSL certificate management",
        "Built-in CI/CD pipeline",
      ],
      title: "Standard",
    },
    {
      cta: {
        children: "Start with Enhanced",
        href: "/",
      },
      description: "Everything in Standard, plus:",
      features: [
        "Development, staging, and production environments",
        "Automated backups",
        "Advanced monitoring",
        "Priority support SLA",
      ],
      title: "Enhanced",
      variant: "highlight",
    },
  ],
  title:
    "We keep your digital systems stable,<br /> scalable, and always improving.",
};

export const SOLUTIONS_PACKAGE_EXAMPLE_PROPS = {
  default: SOLUTIONS_PACKAGE_DEFAULT_PROPS,
};
