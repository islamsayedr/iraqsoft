import HeroArt from "../components/atoms/illu/HeroArt";
import Btn from "../components/atoms/Btn";
import StarRate from "../components/molecules/StarRate";
import styles from "./Hero.module.css";
import { Mouse } from "../components/atoms/icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={`${styles.hero} relative`}>
      <div className={`container ${styles.container}`}>
        <div className={`col ${styles.content}`}>
          <span className="text-[28px] text-[var(--yo)] ">👋 ياهلا</span>
          <h1 className="">حلول برمجية, وتصميمات مبتكرة ذات جوده عالية</h1>
          <p className="">
            عراق سوفت هى شركة رائدة في مجال الحلول البرمجية والتصميم في العراق،
            تسعى دائما لتطوير أدوات وتقنيات عالية الجودة تساعد الاعمال الصغيره
            والمتوسطه فى ادارة المبيعات, المخازن, القوه البشرية,... وامور اخرى.
          </p>
          <div className={styles.review}>
            تقييمنا على الفيسبوك
            <StarRate rate={4.9} />
          </div>

          <div className={`${styles.actions} w-full pl-0 md:pl-40`}>
            <Link href="services">
              <Btn type="primary" classes="md:max-w-fit" handleClick={() => {}}>
                خدمات
              </Btn>
            </Link>
            <Link href="systems">
              <Btn type="sec" classes="" handleClick={() => {}}>
                انظمة
              </Btn>
            </Link>
          </div>
        </div>

        <div className="flex-1 md:w-full sm:w-full">
          <HeroArt width="100%"  className="h-[300px] sm:h-[500px]"/>
        </div>
      </div>
      <Mouse
        height={44}
        width={44}
        stroke="white"
        className="absolute bottom-8 right-2/4  md:flex hidden"
      />
    </section>
  );
}
