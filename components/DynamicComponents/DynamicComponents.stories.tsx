import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DynamicComponents } from "./DynamicComponents";
import { DYNAMIC_COMPONENTS_EXAMPLE_PROPS } from "./DynamicComponents.examples";

const meta: Meta<typeof DynamicComponents> = {
  title: "Organisms/Dynamic Components",
  component: DynamicComponents,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DynamicComponents>;

export const Default: Story = {
  args: DYNAMIC_COMPONENTS_EXAMPLE_PROPS.default,
};
