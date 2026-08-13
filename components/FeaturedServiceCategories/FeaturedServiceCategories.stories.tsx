import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeaturedServiceCategories } from "./FeaturedServiceCategories";
import { FEATURED_SERVICE_CATEGORIES_EXAMPLE_PROPS } from "./FeaturedServiceCategories.examples";

const meta: Meta<typeof FeaturedServiceCategories> = {
  title: "Organisms/Featured Service Categories",
  component: FeaturedServiceCategories,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedServiceCategories>;
export const Default: Story = {
  args: FEATURED_SERVICE_CATEGORIES_EXAMPLE_PROPS.default,
};
