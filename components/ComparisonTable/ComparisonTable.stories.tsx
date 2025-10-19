import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ComparisonTable } from "./ComparisonTable";
import { COMPARISON_TABLE_EXAMPLE_PROPS } from "./ComparisonTable.examples";

const meta: Meta<typeof ComparisonTable> = {
  title: "Organisms/Comparison Table",
  component: ComparisonTable,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ComparisonTable>;
export const Default: Story = { args: COMPARISON_TABLE_EXAMPLE_PROPS.default };
