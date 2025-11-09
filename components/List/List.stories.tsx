import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { List } from "./List";
import { LIST_EXAMPLE_PROPS } from "./List.examples";

const meta: Meta<typeof List> = {
  title: "Molecules/List",
  component: List,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List>;
export const Default: Story = { args: LIST_EXAMPLE_PROPS.default };
