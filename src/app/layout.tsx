import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from './registry'
import Head from 'next/head'

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
      <Head>
        <meta http-equiv='cache-control' content='no-cache'/> 
        <meta http-equiv='expires' content='0'/> 
        <meta http-equiv='pragma' content='no-cache'/>
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
