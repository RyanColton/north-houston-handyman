import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";

export const metadata: Metadata = {
  title: "North Houston Handyman",
  description: "Trusted general contractor serving Harris and Montgomery counties with expert home repairs, fencing, remodeling, and more. No job too big or small—built to last, done right the first time. Contact Gary today for a free estimate!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
