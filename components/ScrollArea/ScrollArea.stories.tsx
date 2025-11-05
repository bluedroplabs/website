import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollArea } from "./ScrollArea";
import { SCROLL_AREA_EXAMPLE_PROPS } from "./ScrollArea.examples";

const meta: Meta<typeof ScrollArea> = {
  title: "Molecules/Scroll Area",
  component: ScrollArea,
  parameters: { layout: "full-centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;
export const Vertical: Story = { args: SCROLL_AREA_EXAMPLE_PROPS.vertical };
export const Horizontal: Story = { args: SCROLL_AREA_EXAMPLE_PROPS.horizontal };
