import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedSplitIconList } from "./FeaturedSplitIconList";
import { FEATURED_SPLIT_ICON_LIST_EXAMPLE_PROPS } from "./FeaturedSplitIconList.examples";

const meta: Meta<typeof FeaturedSplitIconList> = {
  title: "Organisms/Featured Split Icon List",
  component: FeaturedSplitIconList,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedSplitIconList>;

export const Default: Story = {
  args: FEATURED_SPLIT_ICON_LIST_EXAMPLE_PROPS.default,
};
