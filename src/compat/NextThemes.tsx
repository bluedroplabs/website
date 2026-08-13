import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme?: string;
  resolvedTheme?: string;
  systemTheme?: "light" | "dark";
  setTheme: (theme: string) => void;
  themes: string[];
  forcedTheme?: string;
}

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  themes?: string[];
}

const ThemeContext = createContext<ThemeContextValue>({
  setTheme: () => undefined,
  themes: ["light", "dark", "system"],
});

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  themes = ["light", "dark", "system"],
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">();

  const applyTheme = useCallback((nextTheme: Theme) => {
    const nextSystemTheme = getSystemTheme();
    const resolved = nextTheme === "system" ? nextSystemTheme : nextTheme;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePreference = nextTheme;
    document.documentElement.classList.toggle("dark", resolved === "dark");
    document.documentElement.style.colorScheme = resolved;
    setSystemTheme(nextSystemTheme);
  }, []);

  const setTheme = useCallback(
    (nextTheme: string) => {
      const normalized: Theme = ["light", "dark", "system"].includes(nextTheme)
        ? (nextTheme as Theme)
        : "system";
      localStorage.setItem("theme", normalized);
      setThemeState(normalized);
      applyTheme(normalized);
      window.dispatchEvent(
        new CustomEvent("bluedrop-theme-change", { detail: normalized }),
      );
    },
    [applyTheme],
  );

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial =
      stored && ["light", "dark", "system"].includes(stored)
        ? stored
        : ((["light", "dark", "system"].includes(defaultTheme)
            ? defaultTheme
            : "system") as Theme);
    setThemeState(initial);
    applyTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme(initial);
    const handleThemeChange = (event: Event) => {
      const nextTheme = (event as CustomEvent<Theme>).detail;
      setThemeState(nextTheme);
      applyTheme(nextTheme);
    };
    media.addEventListener("change", handleChange);
    window.addEventListener("bluedrop-theme-change", handleThemeChange);
    return () => {
      media.removeEventListener("change", handleChange);
      window.removeEventListener("bluedrop-theme-change", handleThemeChange);
    };
  }, [applyTheme, defaultTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme: theme === "system" ? systemTheme : theme,
      systemTheme,
      setTheme,
      themes,
    }),
    [theme, systemTheme, setTheme, themes],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
