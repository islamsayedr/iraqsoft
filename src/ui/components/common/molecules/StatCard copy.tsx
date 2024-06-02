import { ReactNode } from "react";
import styls from "./StatCard.module.css";
import CountUp from "react-countup";

type StatCardProps = {
  name: string;
  CurrentValue: number;
  icon: ReactNode;
};

export default function StatCard({ name, CurrentValue, icon }: StatCardProps) {
 
  return (
    <div className={`${styls.card} `} >
      <div className={styls.text}>
        <div className={styls.name}>{name}</div>
        <div className={styls.value}>
          <CountUp end={CurrentValue} duration={3} />
          <span className="statCard"></span>
          <i>+</i>
        </div>
      </div>
      <div className={styls.icon}>{icon}</div>
    </div>
  );
}
