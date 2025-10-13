import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SolutionCard } from "./SolutionCard";
import { SOLUTION_CARD_EXAMPLE_PROPS } from "./SolutionCard.examples";

const meta: Meta<typeof SolutionCard> = {
  title: "Molecules/Solution Card",
  component: SolutionCard,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SolutionCard>;

export const Default: Story = { args: SOLUTION_CARD_EXAMPLE_PROPS.default };
export const Full: Story = { args: SOLUTION_CARD_EXAMPLE_PROPS.full };
