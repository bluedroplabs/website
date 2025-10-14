import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedSolutionsGrid } from "./FeaturedSolutionsGrid";
import { FEATURED_SOLUTIONS_GRID_EXAMPLE_PROPS } from "./FeaturedSolutionsGrid.examples";

const meta: Meta<typeof FeaturedSolutionsGrid> = {
  title: "Organisms/Featured Solutions Grid",
  component: FeaturedSolutionsGrid,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeaturedSolutionsGrid>;

export const Default: Story = {
  args: FEATURED_SOLUTIONS_GRID_EXAMPLE_PROPS.default,
};
