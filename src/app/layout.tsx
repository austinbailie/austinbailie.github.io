import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from './registry'

export const metadata: Metadata = {
  title: "Austin Bailie",
  description: "Austin Bailie's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
