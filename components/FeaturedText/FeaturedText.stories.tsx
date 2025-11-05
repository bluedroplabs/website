import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedText } from "./FeaturedText";
import { FEATURED_TEXT_EXAMPLE_PROPS } from "./FeaturedText.examples";

const meta: Meta<typeof FeaturedText> = {
  title: "Organisms/Featured Text",
  component: FeaturedText,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedText>;
export const Default: Story = { args: FEATURED_TEXT_EXAMPLE_PROPS.default };
