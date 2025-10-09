import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DottedBackground } from "./DottedBackground";
import { DOTTED_BACKGROUND_EXAMPLE_PROPS } from "./DottedBackground.examples";

const meta: Meta<typeof DottedBackground> = {
  title: "Atoms/Dotted Background",
  component: DottedBackground,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DottedBackground>;

export const Default: Story = { args: DOTTED_BACKGROUND_EXAMPLE_PROPS.default };
