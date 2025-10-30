import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InlineImage } from "./InlineImage";
import { INLINE_IMAGE_EXAMPLE_PROPS } from "./InlineImage.examples";

const meta: Meta<typeof InlineImage> = {
  title: "Molecules/Inline Image",
  component: InlineImage,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InlineImage>;
export const Default: Story = { args: INLINE_IMAGE_EXAMPLE_PROPS.default };
