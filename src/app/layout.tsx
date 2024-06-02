import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/styles/reset.css";
import "../assets/styles/fonts.css";
import "../assets/styles/main.css";
import MainLayout from "../ui/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
