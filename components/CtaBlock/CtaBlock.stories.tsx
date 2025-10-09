import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CtaBlock } from "./CtaBlock";
import { CTA_BLOCK_EXAMPLE_PROPS } from "./CtaBlock.examples";

const meta: Meta<typeof CtaBlock> = {
  title: "Organisms/CTA Block",
  component: CtaBlock,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CtaBlock>;

export const Default: Story = { args: CTA_BLOCK_EXAMPLE_PROPS.default };
