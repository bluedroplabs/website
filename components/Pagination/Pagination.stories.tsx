import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pagination } from "./Pagination";
import { PAGINATION_EXAMPLE_PROPS } from "./Pagination.examples";

const meta: Meta<typeof Pagination> = {
  title: "Molecules/Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;
export const Default: Story = { args: PAGINATION_EXAMPLE_PROPS.default };
