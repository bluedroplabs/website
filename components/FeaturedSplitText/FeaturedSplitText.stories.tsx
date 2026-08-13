import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeaturedSplitText } from "./FeaturedSplitText";
import { FEATURED_SPLIT_TEXT_EXAMPLE_PROPS } from "./FeaturedSplitText.examples";

const meta: Meta<typeof FeaturedSplitText> = {
  title: "Organisms/Featured Split Text",
  component: FeaturedSplitText,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedSplitText>;

export const Default: Story = {
  args: FEATURED_SPLIT_TEXT_EXAMPLE_PROPS.default,
};
