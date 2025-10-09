import { LaptopIcon, MoonIcon, SunIcon } from "@/components/Icon";

export const themes = ["system", "light", "dark"] as const;

export const themeIconMap = {
  system: LaptopIcon,
  light: SunIcon,
  dark: MoonIcon,
};
