import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                inter.className
            )}
        >
          {children}
        </body>
    </html>
  );
}
