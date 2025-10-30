import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs-vite";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import "../app/globals.css";
import { cn, geist, geistMono } from "../utils";
import "./storybook.css";

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
      const { setTheme } = useTheme();

      useEffect(() => {
        setTheme(context.globals.theme);
      }, [context.globals.theme, setTheme]);

      const content = (
        <div className={cn(geist.variable, geistMono.variable)}>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
          >
            <Story />
          </ThemeProvider>
        </div>
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
