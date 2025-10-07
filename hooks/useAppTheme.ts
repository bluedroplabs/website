import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useAppTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme = "system", setTheme } = useNextTheme();

  useEffect(() => {
    const systemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (theme === "system") {
      setIsDarkMode(systemDarkMode);
    } else {
      setIsDarkMode(theme === "dark");
    }
  }, [theme]);

  return { theme, setTheme, isDarkMode };
};
