import Image from "next/image";
import type { IComparisonTable } from "./ComparisonTable.types";

const COMPARISON_TABLE_DEFAULT_PROPS: IComparisonTable = {
  caption:
    "Feature comparison between Blue Drop and Legacy Drupal Consultancies",
  columns: [
    { header: null, isHighlighted: false, name: "" },
    {
      header: (
        <Image
          alt="Image description"
          height={51}
          key="column-1"
          src="/assets/logo.svg"
          width={225}
        />
      ),
      isHighlighted: true,
      name: "Blue Drop",
    },
    {
      header: "Legacy Drupal Consultancies",
      isHighlighted: false,
      name: "Legacy Drupal Consultancies",
    },
  ],
  description:
    "Our goal is to change this dynamic — to become true partners who are accountable, available, and authentic.",
  eyebrow: "What sets us apart",
  rows: [
    {
      label: "Charges < $150/hour",
      values: [true, false],
    },
    {
      label:
        "Provides fully managed hosting solutions cheaper than Acquia and Pantheon",
      values: [true, false],
    },
    {
      label: "Available to answer questions 24/7",
      values: [true, false],
    },
    {
      label: "Purposefully lean to be flexible and adaptable",
      values: [true, false],
    },
    {
      label: "Has no minimum required cost",
      values: [true, false],
    },
  ],
  title: "The Blue Drop Difference",
};

export const COMPARISON_TABLE_EXAMPLE_PROPS = {
  default: COMPARISON_TABLE_DEFAULT_PROPS,
};
