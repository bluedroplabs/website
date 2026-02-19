import { LaptopIcon } from "../Icon";
import type { IContentBlock } from "./ContentBlock.types";

const TEXT_BLOCK_DEFAULT_PROPS: IContentBlock = {
  blockquote:
    "Most clients save 30-50% compared to Pantheon or Acquia while receiving better performance.",
  blockquoteClassName: "my-8",
  date: "september 26, 2025",
  description:
    "High-performance hosting for Drupal and WordPress that scales with your success, not against it. Fixed, predictable pricing with direct access to experts. Get the advanced infrastructure you needs at a fraction of the cost.",
  eyebrow: "Our platform",
  eyebrowClassName: "my-4 lg:my-5",
  Icon: LaptopIcon,
  primaryCTA: {
    children: "Schedule a demo",
    href: "/contact",
  },
  secondaryCTA: {
    children: "Learn more",
    href: "/about-us",
  },
  title: "Enterprise Performance Without Enterprise Pricing",
  titleClassName: "mb-4 lg:mb-5",
};

export const TEXT_BLOCK_EXAMPLE_PROPS = {
  default: TEXT_BLOCK_DEFAULT_PROPS,
};
