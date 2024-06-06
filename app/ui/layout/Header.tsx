"use client";
import styles from "./Header.module.css";
import Btn from "../components/atoms/Btn";
import { IraqsLogo, IraqsIcon } from "../components/atoms/IraqsLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const url = `https://wa.me/+9647722284333`;
  const pathname = usePathname();

  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the width of the indicator based on scroll position
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex flex-col items-center sticky top-0 ${styles.header}`}
    >
      <div className={`${styles.container} w-full`}>
        <Link href="/">
          <div className="logo cursor-pointer">
            <IraqsLogo className="hidden sm:block" />
            <IraqsIcon height={48} className="block sm:hidden" />
          </div>
        </Link>

        <nav className="hidden font-medium lg:flex">
          <Link href="/" passHref>
            <span
              className={
                pathname === "/"
                  ? "text-[var(--pc)] font-semibold px-3"
                  : `hover:scale-150 hover:text-[var(--pc)] transition-all duration-150 font-medium hover:px-6 px-3 ease-out`
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
                  : `hover:scale-150 hover:text-[var(--pc)] transition-all duration-150 font-medium hover:px-6 px-3 ease-out`
              }
            >
              الأنظمة
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
                  : ` hover:scale-150 hover:text-[var(--pc)] transition-all duration-150 font-medium hover:px-6 px-3 ease-out`
              }
            >
              التحديثات
            </span>
          </Link>
        </nav>

        <a className={styles.contact} href={url} target="_blank">
          <Btn type="sec" classes={styles.contact} handleClick={() => {}}>
            تواصل معنا
          </Btn>
        </a>
      </div>
      <div
        className={` ${styles.indicator} h-[5px] w-[100vw] top-[72px] bg-[var(--sc32)] fixed z-30 flex`}
      >
        <div
          id="indicator"
          className="h-full bg-[var(--yo)]"
          style={{ width: `${scrollWidth}%` }}
        />
      </div>
    </header>
  );
}
