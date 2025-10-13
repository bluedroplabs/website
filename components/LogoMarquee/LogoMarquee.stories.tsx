import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LogoMarquee } from "./LogoMarquee";
import { LOGO_MARQUEE_EXAMPLE_PROPS } from "./LogoMarquee.examples";

const meta: Meta<typeof LogoMarquee> = {
  title: "Organisms/Logo Marquee",
  component: LogoMarquee,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LogoMarquee>;
export const Default: Story = { args: LOGO_MARQUEE_EXAMPLE_PROPS.default };
