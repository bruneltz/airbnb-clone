import type { Metadata } from "next";
import "./globals.css";

import { Nunito } from "next/font/google";
import getCurrentUser from "./actions/getCurrentUser";
import LoginModal from "./components/modals/loginmodal";
import RegisterModal from "./components/modals/registermodel";
import RentModal from "./components/modals/RentModal";
import Navbar from "./components/navbar/navbar";
import ToasterProvider from "./providers/ToastProvider";

// Exposes the class name that can be passed to the body tag
const font = Nunito({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "AirBnB",
  description: "AirBnB Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  console.log(currentUser);
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
