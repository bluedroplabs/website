import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";
import { cn, geist, geistMono } from "../utils";

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
    // Font decorator
    (Story) => (
      <div className={cn(geist.variable, geistMono.variable)}>
        <Story />
      </div>
    ),
    // Theme decorator
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
    // Layout decorator
    (Story, { parameters }) => {
      const { layout } = parameters;

      switch (layout) {
        case "full-centered":
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
              }}
            >
              <Story />
            </div>
          );

        default:
          return <Story />;
      }
    },
  ],
};

export default preview;
