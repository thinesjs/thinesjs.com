import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

import geistWoff2 from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";

const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "font";
preloadLink.type = "font/woff2";
preloadLink.href = geistWoff2;
preloadLink.crossOrigin = "anonymous";
document.head.appendChild(preloadLink);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
            <App />
        </ThemeProvider>
    </StrictMode>
);
