import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion } from "./Accordion";
import { ACCORDION_EXAMPLE_PROPS } from "./Accordion.examples";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: ACCORDION_EXAMPLE_PROPS.default,
};
