import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DetailsAside } from "./DetailsAside";
import { DETAILS_ASIDE_EXAMPLE_PROPS } from "./DetailsAside.examples";

const meta: Meta<typeof DetailsAside> = {
  title: "Molecules/Details Aside",
  component: DetailsAside,
  parameters: { layout: "full-centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DetailsAside>;
export const Default: Story = { args: DETAILS_ASIDE_EXAMPLE_PROPS.default };
