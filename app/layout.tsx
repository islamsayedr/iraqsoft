import type { Metadata } from "next";
import "./ui/globals.css";

import Header from "./ui/layout/Header";
import Footer from "./ui/layout/Footer";
import NavBar from "./ui/layout/NavBar";

export const metadata: Metadata = {
  title: "عراق سوفت | البرمجيات الافضل فى العراق",
  description:
    "شركة رائدة في مجال البرمجيات في العراق، نسعى دائما لتطوير أدواتنا وتحديث التقنيات التي نستعملها للوصول لأعلى جودة ممكة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body">
        <Header />
        {children}
        <Footer />
        <NavBar />
      </body>
    </html>
  );
}
