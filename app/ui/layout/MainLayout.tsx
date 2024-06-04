import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header /> {children} <Footer /> <NavBar />
    </>
  );
}
