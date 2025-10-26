import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DropdownMenu } from "./DropdownMenu";
import { DROPDOWN_MENU_EXAMPLE_PROPS } from "./DropdownMenu.examples";

const meta: Meta<typeof DropdownMenu> = {
  title: "Molecules/Dropdown Menu",
  component: DropdownMenu,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const MultipleSelect: Story = {
  args: DROPDOWN_MENU_EXAMPLE_PROPS.multiselect,
};
