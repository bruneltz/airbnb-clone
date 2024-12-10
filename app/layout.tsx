import type { Metadata } from "next";
import "./globals.css";

import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/navbar";
import RegisterModal from "./components/modals/registermodel";
import ToasterProvider from "./providers/ToastProvider";
import LoginModal from "./components/modals/loginmodal";
import getCurrentUser from "./actions/getCurrentUser";

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
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  );
}
