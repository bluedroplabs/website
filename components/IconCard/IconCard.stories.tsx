import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconCard } from "./IconCard";
import { ICON_CARD_EXAMPLE_PROPS } from "./IconCard.examples";

const meta: Meta<typeof IconCard> = {
  title: "Molecules/Icon Card",
  component: IconCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconCard>;
export const Default: Story = { args: ICON_CARD_EXAMPLE_PROPS.default };
