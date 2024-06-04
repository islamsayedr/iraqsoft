"use client";

import { useState, useEffect } from "react";
import { Home, Services, Systems, Updates } from "../../../assets/icons";
import NavBarLink from "../common/atoms/NavBarLink";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActive("home");
    } else if (pathname === "/systems") {
      setActive("systems");
    } else if (pathname === "/services") {
      setActive("services");
    } else if (pathname === "/updates") {
      setActive("updates");
    }
  }, [pathname]);
  return (
    <div className=" fixed bottom-0 w-full p-4 py-2 z-30 lg:hidden bg-[#3f336924]  backdrop-blur-xl">
      <div className="flex p-1 rounded-[16px] bg-[#3f3369] w-full">
        <NavBarLink
          to="/"
          text="الرئيسية"
          icon={<Home stroke={active === "home" ? `var(--yo)` : "white"} />}
          isActive={active === "home" ? true : false}
          handleClick={() => {
            setActive("home");
          }}
        />
        <NavBarLink
          to="systems"
          text="الانظمة"
          icon={
            <Systems stroke={active === "systems" ? `var(--yo)` : "white"} />
          }
          isActive={active === "systems" ? true : false}
          handleClick={() => {
            setActive("systems");
          }}
        />
        <NavBarLink
          to="services"
          text="الخدمات"
          icon={
            <Services stroke={active === "services" ? `var(--yo)` : "white"} />
          }
          isActive={active === "services" ? true : false}
          handleClick={() => {
            setActive("services");
          }}
        />
        <NavBarLink
          to="updates"
          text="التحديثات"
          icon={
            <Updates stroke={active === "updates" ? `var(--yo)` : "white"} />
          }
          isActive={active === "updates" ? true : false}
          handleClick={() => {
            setActive("updates");
          }}
        />
      </div>
    </div>
  );
}
