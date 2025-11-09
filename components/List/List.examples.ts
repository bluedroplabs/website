import type { IList } from "./List.types";

const LIST_DEFAULT_PROPS: IList = {
  className: "font-medium",
  items: [
    "Development, staging, and production environments",
    "Automated backups",
    "Advanced monitoring",
    "Priority support SLA",
  ],
};

export const LIST_EXAMPLE_PROPS = {
  default: LIST_DEFAULT_PROPS,
};
