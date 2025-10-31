import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedTextList } from "./FeaturedTextList";
import { FEATURED_TEXT_LIST_EXAMPLE_PROPS } from "./FeaturedTextList.examples";

const meta: Meta<typeof FeaturedTextList> = {
  title: "Organisms/Featured Text List",
  component: FeaturedTextList,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeaturedTextList>;

export const Default: Story = {
  args: FEATURED_TEXT_LIST_EXAMPLE_PROPS.default,
};
