import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GridSeparator } from "./GridSeparator";

const meta: Meta<typeof GridSeparator> = {
  title: "Organisms/Grid Separator",
  component: GridSeparator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GridSeparator>;
export const Default: Story = {};
