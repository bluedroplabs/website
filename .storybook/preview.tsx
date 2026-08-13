import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, type ReactNode } from "react";
import "../app/globals.css";
import "./storybook.css";

function StoryThemeBridge({
  children,
  theme,
}: {
  children: ReactNode;
  theme: string;
}) {
  const { setTheme } = useTheme();
  useEffect(() => setTheme(theme), [setTheme, theme]);
  return children;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      manual: false,
    },
    viewport: {
      options: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "393px",
            height: "852px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1024px",
            height: "768px",
          },
        },
        large: {
          name: "Large Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
    },
  },
  decorators: [
    // Combined Theme, Font, and Docs Background decorator
    (Story, context) => {
      const content = (
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <StoryThemeBridge theme={String(context.globals.theme ?? "light")}>
            <Story />
          </StoryThemeBridge>
        </ThemeProvider>
      );

      // Apply background for docs pages
      if (context.viewMode === "docs") {
        return <div className="bg-page-default">{content}</div>;
      }

      return content;
    },
    // Theme decorator for Storybook toolbar
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
      parentSelector: "html",
    }),
  ],
};

export default preview;
