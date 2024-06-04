"use client";

import { IraqsIcon, IraqsLogo } from "../components/atoms/IraqsLogo";
import {
  EmailLink,
  Exteranl,
  LocationLink,
  NavLink,
  PhoneLink,
} from "../components/atoms/Links";
import { FacebookRate, GoogleRate } from "../components/molecules/StarRate";
const bgart = "./imgs/bgart02.png";
import Subscribe from "../components/molecules/Subscribe";
import { Facebook, Github, Telegram, Youtube } from "../components/atoms/icons";
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <section
        className="py-[88px] bg-top bg-no-repeat bg-cover border-t-[1px] border-[var(--pc)]"
        style={{ backgroundImage: `url(${bgart})` }}
      >
        <div className="container flex flex-col lg:flex-row gap-14 lg:gap-0">
          {/* col 01 */}
          <div className="flex flex-col w-full lg:w-2/4 gap-14 lg:pl-3 pl-0">
            {/* about */}
            <div className="flex gap-6 sm:items-center flex-col sm:flex-row">
              <Image src="/imgs/logo.svg" alt="logo" width={102} height={127} />
              <div className="flex flex-1 flex-col gap-2 justify-items-start">
                <h4>نبذة عن الشركة</h4>
                <p className="max-w-[500px]">
                  شركة رائدة في مجال البرمجيات في العراق،نسعى دائما لتطوير
                  أدواتنا وتحديث التقنيات التي نستعملها للوصول لأعلى جودة ممكنة
                  والحفاظ على الجودة
                </p>
                <div className="flex gap-3 flex-wrap">
                  <FacebookRate rate={4} />
                  <GoogleRate rate={4} />
                </div>
              </div>
            </div>
            {/* contacts */}
            <div className="flex flex-col gap-3">
              <h4>تواصل معنا</h4>
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="flex flex-col gap-2 ">
                  <EmailLink email="info@iraq-soft.com" />
                  <PhoneLink phone="07722284111" />
                </div>
                <div className="flex flex-1 max-w-[350px]">
                  <LocationLink location="العراق - بغداد -شارع الصناعه - مجاور الجامعة التكنولوجية-شارع معهد مرجان" />
                </div>
              </div>
            </div>
          </div>

          {/* col 02 */}
          <div className="flex flex-col w-full lg:w-2/4 gap-14 lg:pl-3 pl-0">
            {/* subscirbe */}
            <Subscribe />
            {/* links */}
            <div className="flex flex-col gap-3">
              <h4>روابط مهمة</h4>
              <div className="flex gap-6 flex-col sm:flex-row">
                <div className="flex gap-2 flex-1">
                  <div className="flex flex-col gap-2 flex-1">
                    <NavLink text="انظمة وبرامج" link="systems" />
                    <NavLink text="خدمات" link="services" />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <Exteranl
                      text="تسجيل نطاق"
                      link="https://huwaida-app.com/domain/#why-us"
                    />
                    <NavLink text="تحديثات" link="updates" />
                  </div>
                </div>
                <div className="flex gap-2 flex-1">
                  <div className="flex flex-col gap-2 flex-1">
                    <Exteranl
                      text="من نحن"
                      link="https://www.facebook.com/iraqsoft1"
                    />
                    <Exteranl
                      text="تواصل معنا"
                      link="https://wa.me/+9647722284333"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        style={{ backgroundImage: "var(--00)" }}
        className="py-[16px] px-[80px] m-auto pb-[108px] lg:pb-[16px]"
      >
        <div className=" flex flex-col md:flex-row gap-4 items-center">
          <div className="text-white flex-1 text-[14px] md:text-right text-center">
            جميع الحقوق محفوظة لشركة عراق سوفت © 2024
          </div>
          <div className="socials flex gap-3">
            <a href="" target="_blank">
              <Github className="fill-white hover:fill-[var(--yo)]" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCHNC4Nk2VLydXqNO21fLxdQ/playlists"
              target="_blank"
            >
              <Youtube className="fill-white hover:fill-[var(--yo)]" />
            </a>
            <a href="https://www.facebook.com/iraqsoft1" target="_blank">
              <Facebook className="fill-white hover:fill-[var(--yo)]" />
            </a>
            <a href="" target="_blank">
              <Telegram className="fill-white hover:fill-[var(--yo)]" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
