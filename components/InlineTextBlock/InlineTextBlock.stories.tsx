import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InlineTextBlock } from "./InlineTextBlock";
import { INLINE_TEXT_BLOCK_EXAMPLE_PROPS } from "./InlineTextBlock.examples";

const meta: Meta<typeof InlineTextBlock> = {
  title: "Organisms/Inline Text Block",
  component: InlineTextBlock,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InlineTextBlock>;

export const Default: Story = {
  args: INLINE_TEXT_BLOCK_EXAMPLE_PROPS.default,
};
