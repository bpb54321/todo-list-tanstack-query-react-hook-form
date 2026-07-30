import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/400.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
      <App />
    </MantineProvider>
  </StrictMode>,
);
