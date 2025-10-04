import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "./Container";
import { CONTAINER_EXAMPLE_PROPS } from "./Container.examples";

const meta: Meta<typeof Container> = {
  title: "Foundations/Container",
  component: Container,
  parameters: { layout: "full-centered" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Block: Story = { args: CONTAINER_EXAMPLE_PROPS.block };
export const Flex: Story = { args: CONTAINER_EXAMPLE_PROPS.flex };
export const Grid: Story = { args: CONTAINER_EXAMPLE_PROPS.grid };
