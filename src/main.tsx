import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Admin from "./pages/Admin.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
        <Toaster />
    </StrictMode>
);
