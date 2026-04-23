import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedSolutionsRow } from "./FeaturedSolutionsRow";
import { FEATURED_SOLUTIONS_ROW_EXAMPLE_PROPS } from "./FeaturedSolutionsRow.examples";

const meta: Meta<typeof FeaturedSolutionsRow> = {
  title: "Organisms/Featured Solutions Row",
  component: FeaturedSolutionsRow,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedSolutionsRow>;

export const Default: Story = {
  args: FEATURED_SOLUTIONS_ROW_EXAMPLE_PROPS.default,
};
