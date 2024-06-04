import React, { useEffect, useRef } from "react";
import styles from "./StatCard.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type StatCardProps = {
  name: string;
  CurrentValue: number;
  icon: React.ReactNode;
};

export default function StatCard({ name, CurrentValue, icon }: StatCardProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define the object to animate
    const obj = { count: 0 };

    gsap.to(obj, {
      count: CurrentValue,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%", // Adjust as needed
        end: "bottom 20%", // Adjust as needed
        toggleActions: "restart none none none", // Adjust as needed
      },
      onUpdate: function () {
        if (counterRef.current) {
          counterRef.current.innerHTML = Math.floor(obj.count).toString();
        }
      },
    });
  }, [CurrentValue]);

  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.value}>
          <span ref={counterRef} className="statCard">{CurrentValue}</span>
          <i>+</i>
        </div>
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
}
