import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HighlightsTable } from "./HighlightsTable";
import { HIGHLIGHTS_TABLE_EXAMPLE_PROPS } from "./HighlightsTable.examples";

const meta: Meta<typeof HighlightsTable> = {
  title: "Molecules/Highlights Table",
  component: HighlightsTable,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HighlightsTable>;

export const Default: Story = { args: HIGHLIGHTS_TABLE_EXAMPLE_PROPS.default };
