import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PackageCard } from "./PackageCard";
import { PACKAGE_CARD_EXAMPLE_PROPS } from "./PackageCard.examples";

const meta: Meta<typeof PackageCard> = {
  title: "Molecules/Package Card",
  component: PackageCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PackageCard>;
export const Default: Story = { args: PACKAGE_CARD_EXAMPLE_PROPS.default };
