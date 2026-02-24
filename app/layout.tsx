import { Navigation } from "@/components/Navigation/Navigation";
import { PageFooter } from "@/components/PageFooter/PageFooter";
import { cn, geist, geistMono } from "@/utils";
import {
  loadCtaBlockData,
  loadFooterData,
  loadNavigationData,
} from "@/utils/data";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Marker } from "@/components/Marker/Marker";

export const metadata: Metadata = {
  title: "Blue Drop Labs - Experts in Digital Strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ctaBlockDData = loadCtaBlockData();
  const footerData = loadFooterData();
  const navigationData = loadNavigationData();

  return (
    <html
      className={cn(geist.variable, geistMono.variable, "antialiased")}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
        >
          {navigationData && <Navigation {...navigationData} />}
          {children}
          {ctaBlockDData && footerData && (
            <PageFooter
              ctaBlockProps={ctaBlockDData}
              footerProps={footerData}
            />
          )}
          <Marker />
        </ThemeProvider>
      </body>
    </html>
  );
}
