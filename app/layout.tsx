import type { Metadata } from "next";
import "./globals.css";

import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/navbar";
import Modal from "./components/modals/modal";

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
        <Modal isOpen actionLabel="Submit" title="Hello World"/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
