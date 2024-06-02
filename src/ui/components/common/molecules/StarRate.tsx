import { Star, Facebook2, Google } from "../../../../assets/icons";
import styles from "./StarRate.module.css";

type rateProps = {
  rate: number;
};

export default function StarRate({ rate }: rateProps) {
  return (
    <div className={styles.starRate}>
      <div className="flex ">
        <Star fill={rate < 1 ? "white" : "#FFC633"} />
        <Star fill={rate < 2 ? "white" : "#FFC633"} />
        <Star fill={rate < 3 ? "white" : "#FFC633"} />
        <Star fill={rate < 4 ? "white" : "#FFC633"} />
        <Star fill={rate < 5 ? "white" : "#FFC633"} />
      </div>
      ({rate})
    </div>
  );
}

export function FacebookRate({ rate }: rateProps) {
  return (
    <div className="flex gap-3 p-1 pl-3 bg-white rounded-full border-[1px] border-[var(--b16)]">
      <Facebook2 />
      <div className={styles.starRate}>
        <div className="flex ">
          <Star fill={rate < 1 ? "var(--sc32)" : "#FFC633"} />
          <Star fill={rate < 2 ? "var(--sc32)" : "#FFC633"} />
          <Star fill={rate < 3 ? "var(--sc32)" : "#FFC633"} />
          <Star fill={rate < 4 ? "var(--sc32)" : "#FFC633"} />
          <Star fill={rate < 5 ? "var(--sc32)" : "#FFC633"} />
        </div>
        <span className="text-[var(--sc)] text-[18px]">({rate})</span>
      </div>
    </div>
  );
}
export function GoogleRate({ rate }: rateProps) {
  return (
    <div className="flex gap-3 p-1 pl-3 bg-white rounded-full border-[1px] border-[var(--b16)]">
      <Google />
      <div className={styles.starRate}>
        <div className="flex ">
          <Star fill={rate < 1 ? "var(--sc32)" : "#FFC633"} />
          <Star fill={rate < 2 ? "var(--sc32)" : "#FFC633"} />
          <Star fill={rate < 3 ? "var(--sc32)" : "#FFC633"} />
          <Star fill={rate < 4 ? "var(--sc32)" : "#FFC633"} />
          <Star fill={rate < 5 ? "var(--sc32)" : "#FFC633"} />
        </div>
        <span className="text-[var(--sc)] text-[18px]">({rate})</span>
      </div>
    </div>
  );
}
