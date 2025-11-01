import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Wysiwyg } from "./Wysiwyg";
import { WYSIWYG_EXAMPLE_PROPS } from "./Wysiwyg.examples";

const meta: Meta<typeof Wysiwyg> = {
  title: "Organisms/WYSIWYG",
  component: Wysiwyg,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Wysiwyg>;
export const Default: Story = { args: WYSIWYG_EXAMPLE_PROPS.default };
