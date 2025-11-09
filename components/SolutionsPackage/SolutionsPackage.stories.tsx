import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SolutionsPackage } from "./SolutionsPackage";
import { SOLUTIONS_PACKAGE_EXAMPLE_PROPS } from "./SolutionsPackage.examples";

const meta: Meta<typeof SolutionsPackage> = {
  title: "Organisms/Solutions Package",
  component: SolutionsPackage,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SolutionsPackage>;
export const Default: Story = { args: SOLUTIONS_PACKAGE_EXAMPLE_PROPS.default };
