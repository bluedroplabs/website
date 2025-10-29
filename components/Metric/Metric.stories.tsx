import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Metric } from "./Metric";
import { METRIC_EXAMPLE_PROPS } from "./Metric.examples";

const meta: Meta<typeof Metric> = {
  title: "Atoms/Metric",
  component: Metric,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Metric>;
export const Default: Story = { args: METRIC_EXAMPLE_PROPS.default };
