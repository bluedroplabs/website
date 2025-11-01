import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RichText } from "./RichText";
import { RICH_TEXT_EXAMPLE_PROPS } from "./RichText.examples";

const meta: Meta<typeof RichText> = {
  title: "Molecules/Rich Text",
  component: RichText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RichText>;
export const Default: Story = { args: RICH_TEXT_EXAMPLE_PROPS.default };
