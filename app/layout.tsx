import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClient } from "convex/browser";
import { ConvexProvider } from "@/components/providers/convex-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizon",
  description: "Connected workspace for your team where you can write, plan, and get organized.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/letter-h.png",
        href: "/letter-h.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/letter-h-dark.png",
        href: "/letter-h-dark.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="Horizon-Theme-2"
        >
          {children}
        </ThemeProvider>
        </ConvexProvider>
        
      </body>
    </html>
  );
}
