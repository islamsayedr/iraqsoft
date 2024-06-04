import styles from "./Btn.module.css";

type BtnProps = {
  type: string;
  children: React.ReactNode;
  classes: string;
  handleClick: () => void;
};

export default function Btn({
  type,
  children,
  classes,
  handleClick,
}: BtnProps) {
  return (
    <button
      className={`${styles.btn} ${type === "primary" && styles.primary} ${
        type === "sec" && styles.sec
      } ${classes} flex-1`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
