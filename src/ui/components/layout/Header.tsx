"use client";

import styles from "./Header.module.css";
import Btn from "../common/atoms/Btn";
import { IraqsLogo, IraqsIcon } from "../common/atoms/IraqsLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  function redirectToWhatsApp() {
    const url = `https://wa.me/+9647722284333`;
    window.open(url, "_blank");
  }
  const goHome = () => {
    
  };
  return (
    <header
      className={`sticky top-0 border-b-2 border-solid border-[--pc] ${styles.header}`}
    >
      <div className={styles.container}>
        <div className="logo cursor-pointer" onClick={goHome}>
          <IraqsLogo className="hidden sm:block" />
          <IraqsIcon height={48} className="block sm:hidden" />
        </div>

        <nav className="hidden font-medium lg:flex">
          <Link href="/" passHref>
            <span
              className={
                pathname === "/"
                  ? "text-[var(--pc)] font-semibold px-3"
                  : `hover:scale-[1.2] hover:text-[var(--pc)] transition-all duration-150 font-medium hover:px-6 px-3 ease-out`
              }
            >
              الرئيسية
            </span>
          </Link>
          <Link href="/systems" passHref>
            <span
              className={
                pathname === "/systems"
                  ? "text-[var(--pc)] text-semibold px-3"
                  : `hover:scale-[1.2] hover:text-[var(--pc)] transition-all duration-150 font-medium hover:px-6 px-3 ease-out`
              }
            >
              الانظمة
            </span>
          </Link>
          <Link href="/services" passHref>
            <span
              className={
                pathname === "/services"
                  ? "text-[var(--pc)] text-semibold px-3"
                  : `hover:scale-150 hover:text-[var(--pc)] transition-all duration-150 font-medium hover:px-6 px-3 ease-out`
              }
            >
              الخدمات
            </span>
          </Link>

          <Link href="/updates" passHref>
            <span
              className={
                pathname === "/updates"
                  ? "text-[var(--pc)] text-semibold px-3"
                  : `hover:scale-[1.2] hover:text-[var(--pc)] transition-all duration-150 font-medium hover:px-6 px-3 ease-out`
              }
            >
              التحديثات
            </span>
          </Link>
        </nav>

        <div className={styles.contact}>
          <Btn
            type="sec"
            classes={styles.contact}
            handleClick={redirectToWhatsApp}
          >
            تواصل معنا
          </Btn>
        </div>
      </div>
    </header>
  );
}
