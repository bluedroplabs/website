import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MultiSelect } from "./MultiSelect";
import { MULTI_SELECT_EXAMPLE_PROPS } from "./MultiSelect.examples";

const meta: Meta<typeof MultiSelect> = {
  title: "Molecules/Multi-Select",
  component: MultiSelect,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;
export const Default: Story = { args: MULTI_SELECT_EXAMPLE_PROPS.default };
