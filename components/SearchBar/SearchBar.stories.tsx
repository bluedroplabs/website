import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchBar } from "./SearchBar";
import { SEARCH_BAR_EXAMPLE_PROPS } from "./SearchBar.examples";

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/Search Bar",
  component: SearchBar,
  parameters: { layout: "full-centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;
export const Default: Story = { args: SEARCH_BAR_EXAMPLE_PROPS.default };
