import type { Metadata } from "next";
import { OutfitFontFamily } from "../assets/fonts";
import "@/styles/globals.css";
import "@/styles/utils.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OutfitFontFamily.className} antialiased h-screen w-screen overflow-x-hidden overflow-y-auto`}
      >
        {children}
      </body>
    </html>
  );
}
