import styles from "./Services.module.css";
import { ReactNode } from "react";
import { Design, Code, Host, Domain } from "../components/atoms/icons/index";

// imgs
const designImg = "./imgs/design.jpg";
const codeImg = "./imgs/coding.jpg";
const hostImg = "./imgs/hosting.jpg";
const domainImg = "./imgs/domain.jpg";

type serviceProps = {
  icon: ReactNode;
  title: string;
  des: string;
  cover: string;
};

export default function ServiceSec() {
  return (
    <section className="bg-[#fff]">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>ماذا تقدم شركة عراق سوفت</h2>
        <div className={styles.serviceList}>
          <div className={styles.row}>
            <ServiceCrad
              cover={`${designImg}`}
              icon={<Design />}
              title="التصميم"
              des=" هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه."
            />
            <ServiceCrad
              cover={`${codeImg}`}
              icon={<Code />}
              title="البرمجة"
              des=" هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه."
            />
          </div>
          <div className={styles.row}>
            <ServiceCrad
              cover={`${hostImg}`}
              icon={<Host />}
              title="استضافة المواقع"
              des=" هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه."
            />
            <ServiceCrad
              cover={`${domainImg}`}
              icon={<Domain />}
              title="حجز اسم النطاق"
              des=" هدفنا هو خلق هوية تعبيرية تعكس قيم ورؤية عملك بشكل جاذب واحترافي. بفضل هذه الهوية البصرية المميزة، ستكون قادرًا على بناء الثقة لدى جمهورك وتعزيز التعرف على علامتك التجارية بسهولة، مما يساهم في نجاح عملك ونموه."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCrad({ icon, title, des, cover }: serviceProps) {
  return (
    <div className={styles.serviceCard}>
      <div
        className={`${styles.cover} bg-cover bg-center`}
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className={styles.head}>
        {icon}
        <h3>{title}</h3>
      </div>
      <p>{des}</p>
    </div>
  );
}
