import type { Metadata } from "next";
import "./globals.css";

import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/navbar";
import RegisterModal from "./components/modals/registermodel";
import ToasterProvider from "./providers/ToastProvider";

// Exposes the class name that can be passed to the body tag
const font = Nunito({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "AirBnB",
  description: "AirBnB Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
