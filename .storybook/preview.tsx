import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

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
  },
  decorators: [
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
