import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeaturedCtaBand } from "./FeaturedCtaBand";
import { FEATURED_CTA_BAND_EXAMPLE_PROPS } from "./FeaturedCtaBand.examples";

const meta: Meta<typeof FeaturedCtaBand> = {
  title: "Organisms/Featured Cta Band",
  component: FeaturedCtaBand,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedCtaBand>;

export const Default: Story = { args: FEATURED_CTA_BAND_EXAMPLE_PROPS.default };
export const Inline: Story = { args: FEATURED_CTA_BAND_EXAMPLE_PROPS.inline };
export const Centered: Story = {
  args: FEATURED_CTA_BAND_EXAMPLE_PROPS.centered,
};
