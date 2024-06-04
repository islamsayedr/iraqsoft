'use client';


import { useEffect, useRef } from "react";
import Btn from "../components/atoms/Btn";
import styles from "./Banner.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Banner() {
  const bannerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const obj = { count: 0 };

    gsap.to(obj, {
      count: 362,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none none",
      },
      onUpdate: () => {
        if (bannerRef.current) {
          bannerRef.current.innerHTML = Math.floor(obj.count).toLocaleString();
        }
      },
    });
  }, []);

  return (
    <section className={styles.banner}>
      <div className={`container z-10 ${styles.container}`}>
        <h2>
          انضم الى{" "}
          <b className="relative">
            <span
              ref={bannerRef}
              className="md:text-[88px] text-[64px] text-[var(--yo)]"
            >
              362
            </span>
            <div className="absolute bottom-[8px] right-[8px]">
              <Circle />
            </div>
          </b>{" "}
          شركة قامو بالتعامل معنا
        </h2>
        <p className="text-white text-[18px] text-center">
          قم بالتواصل معنا الان ودعنا نساعدك فى التطور
        </p>
        <Btn type="primary" classes="" handleClick={() => {}}>
          تواصل معنا الان
        </Btn>
      </div>
      <div className={styles.art}>
        <Circles height="100%"/>
      </div>
    </section>
  );
}

export function Circles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="681"
      height="312"
      viewBox="0 0 681 312"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M626.2 250.913C626.2 444.267 486.571 600.306 315.15 600.306C143.73 600.306 4.1001 444.267 4.1001 250.913C4.1001 57.5587 143.73 -98.4806 315.15 -98.4806C486.571 -98.4806 626.2 57.5587 626.2 250.913Z"
        stroke="white"
        strokeOpacity="0.6"
        strokeWidth="7"
      />
      <path
        opacity="0.8"
        d="M936.7 108.544C936.7 297.924 797.133 450.869 625.65 450.869C454.167 450.869 314.6 297.924 314.6 108.544C314.6 -80.8369 454.167 -233.781 625.65 -233.781C797.133 -233.781 936.7 -80.8369 936.7 108.544Z"
        stroke="white"
        strokeOpacity="0.6"
        strokeWidth="7"
      />
    </svg>
  );
}

export function Circle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="101"
      viewBox="0 0 100 101"
      fill="none"
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        transform="matrix(1 0 0 -1 0 100.242)"
        fill="white"
        fillOpacity="0.24"
      />
    </svg>
  );
}
