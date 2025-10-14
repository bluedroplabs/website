import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContentBlock } from "./ContentBlock";
import { TEXT_BLOCK_EXAMPLE_PROPS } from "./ContentBlock.examples";

const meta: Meta<typeof ContentBlock> = {
  title: "Molecules/Content Block",
  component: ContentBlock,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentBlock>;
export const Default: Story = { args: TEXT_BLOCK_EXAMPLE_PROPS.default };
