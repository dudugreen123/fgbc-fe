import type { Metadata } from "next";
import "./globals.css";

import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "순복음범천교회",
  description: "순복음범천교회 웹사이트 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
