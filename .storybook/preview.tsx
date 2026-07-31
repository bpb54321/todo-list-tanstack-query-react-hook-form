import type { Preview } from "@storybook/react-vite";
import "@fontsource/roboto/400.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;
