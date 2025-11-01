import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Metrics } from "./Metrics";
import { METRICS_EXAMPLE_PROPS } from "./Metrics.examples";

const meta: Meta<typeof Metrics> = {
  title: "Molecules/Metrics",
  component: Metrics,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Metrics>;
export const Default: Story = { args: METRICS_EXAMPLE_PROPS.default };
