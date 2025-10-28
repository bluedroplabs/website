import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardGrid } from "./CardGrid";
import { CARD_GRID_EXAMPLE_PROPS } from "./CardGrid.examples";

const meta: Meta<typeof CardGrid> = {
  title: "Organisms/Card Grid",
  component: CardGrid,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardGrid>;

export const Default: Story = { args: CARD_GRID_EXAMPLE_PROPS.default };
