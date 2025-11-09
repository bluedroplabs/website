import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedAccordionList } from "./FeaturedAccordionList";
import { FEATURED_ACCORDION_LIST_EXAMPLE_PROPS } from "./FeaturedAccordionList.examples";

const meta: Meta<typeof FeaturedAccordionList> = {
  title: "Organisms/Featured Accordion List",
  component: FeaturedAccordionList,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeaturedAccordionList>;

export const Default: Story = {
  args: FEATURED_ACCORDION_LIST_EXAMPLE_PROPS.default,
};
