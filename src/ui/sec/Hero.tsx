"use client";

import { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import HeroArt from "../../assets/illu/HeroArt";
import Btn from "../components/common/atoms/Btn";
import StarRate from "../components/common/molecules/StarRate";
import styles from "./Hero.module.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Mouse } from "../../assets/icons";

export default function Hero() {
  gsap.registerPlugin(TextPlugin);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  // const navigate = useNavigate();

  const goToServices = () => {
    // navigate("services");
  };
  const goToSystems = () => {
    // navigate("systems");
  };
  useEffect(() => {
    const texts = [
      "👋 مرحبا",
      "👋 أهلاً",
      "👋 هلا",
      "👋 هاي",
      "👋 سلام",
      "👋 كيفك؟",
      "👋 إزيك؟",
      "👋 حيالله",
      "👋 ياهلا",
    ];
    let index = 0;
    gsap.to("#hiText", {
      text: texts[index],
      duration: 2,
      repeat: -1,
      repeatDelay: 3,
      onRepeat: () => {
        index = (index + 1) % texts.length;
        gsap.to("#hiText", { text: texts[index], duration: 2 });
      },
    });
  });

  return (
    <section className={`${styles.hero} relative`}>
      <div className={`container ${styles.container}`}>
        <div className={`col ${styles.content}`}>
          <span id="hiText" className="text-[28px] text-[var(--yo)] "></span>
          <h1 className="" ref={titleRef}>
            حلول برمجية, وتصميمات مبتكرة ذات جوده عالية
          </h1>
          <p className="" ref={bodyRef}>
            عراق سوفت هى شركة رائدة في مجال الحلول البرمجية والتصميم في العراق،
            تسعى دائما لتطوير أدوات وتقنيات عالية الجودة تساعد الاعمال الصغيره
            والمتوسطه فى ادارة المبيعات, المخازن, القوه البشرية,... وامور اخرى.
          </p>
          <div className={styles.review}>
            تقييمنا على الفيسبوك
            <StarRate rate={4.9} />
          </div>

          <div className={`${styles.actions} w-full pl-0 md:pl-40`}>
            <Btn
              type="primary"
              classes="md:max-w-fit"
              handleClick={goToServices}
            >
              خدمات
            </Btn>
            <Btn type="sec" classes="" handleClick={goToSystems}>
              انظمة
            </Btn>
          </div>
        </div>

        <div className="flex-1 md:w-full sm:w-full">
          <HeroArt width="100%" height="auto" />
        </div>
      </div>
      <Mouse
        height={44}
        width={44}
        stroke="white"
        className="absolute bottom-8 right-2/4 animate-bounce md:flex hidden"
      />
    </section>
  );
}
