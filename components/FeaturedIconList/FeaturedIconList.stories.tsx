import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedIconList } from "./FeaturedIconList";
import { FEATURED_ICON_LIST_EXAMPLE_PROPS } from "./FeaturedIconList.examples";

const meta: Meta<typeof FeaturedIconList> = {
  title: "Organisms/Featured Icon List",
  component: FeaturedIconList,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedIconList>;
export const Default: Story = {
  args: FEATURED_ICON_LIST_EXAMPLE_PROPS.default,
};
