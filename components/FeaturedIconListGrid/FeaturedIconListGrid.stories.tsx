import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedIconListGrid } from "./FeaturedIconListGrid";
import { FEATURED_ICON_LIST_GRID_EXAMPLE_PROPS } from "./FeaturedIconListGrid.examples";

const meta: Meta<typeof FeaturedIconListGrid> = {
  title: "Organisms/Featured Icon List Grid",
  component: FeaturedIconListGrid,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeaturedIconListGrid>;

export const Default: Story = {
  args: FEATURED_ICON_LIST_GRID_EXAMPLE_PROPS.default,
};
