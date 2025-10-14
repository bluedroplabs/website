import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedIconGrid } from "./FeaturedIconGrid";
import { FEATURED_ICON_GRID_EXAMPLE_PROPS } from "./FeaturedIconGrid.examples";

const meta: Meta<typeof FeaturedIconGrid> = {
  title: "Organisms/Featured Icon Grid",
  component: FeaturedIconGrid,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedIconGrid>;
export const Default: Story = {
  args: FEATURED_ICON_GRID_EXAMPLE_PROPS.default,
};
