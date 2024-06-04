import type { Metadata } from "next";
import "./ui/globals.css";

import MainLayout from "./ui/layout/MainLayout";

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
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
