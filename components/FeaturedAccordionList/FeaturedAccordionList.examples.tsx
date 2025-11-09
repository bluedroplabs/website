import type { IFeaturedAccordionList } from "./FeaturedAccordionList.types";

const FEATURED_ACCORDION_LIST_DEFAULT_PROPS: IFeaturedAccordionList = {
  items: [
    {
      title: "We're available when you need us",
      content: `
        <ul className="pt-3 space-y-4">
          <li className="flex items-center pl-6.25 relative before:absolute before:size-2.25 before:bg-brand-aqua before:left-0">
            Direct Slack access to our technical team
          </li>
          <li className="flex items-center pl-6.25 relative before:absolute before:size-2.25 before:bg-brand-aqua before:left-0">
            Quick response times, not days or weeks
          </li>
          <li className="flex items-center pl-6.25 relative before:absolute before:size-2.25 before:bg-brand-aqua before:left-0">
            No barriers between you and the people working on your solutions
          </li>
        </ul>
      `,
    },
    {
      title: "We don't waste your money",
      content:
        "Absolutely. Our services are designed to provide maximum value without unnecessary expenses.",
    },
    {
      title: "We actually solve problems",
      content: `Yes. We take a proactive approach to problem-solving, ensuring that we address the root causes of issues.<br/><br/><img src="https://picsum.photos/1000/1000" alt="Placeholder image" />`,
    },
  ],
  title: "We Fix What's Broken.<br/><em>We Build What Works.</em>",
  description:
    "Our team specializes in identifying and resolving complex technical challenges.",
};

export const FEATURED_ACCORDION_LIST_EXAMPLE_PROPS = {
  default: FEATURED_ACCORDION_LIST_DEFAULT_PROPS,
};
