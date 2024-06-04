import styles from "./ProductCard.module.css";
import { Win, Web, IOS, Mac, Android } from "../atoms/icons/index";

type ProductProps = {
  data: Product;
  classes: string;
};
type Product = {
  id: string;
  name: string;
  des: string;
  price: number;
  priceType: string;
  numOfDownloads: number;
  platforms: string[];
  cover: string;
};

export default function ProductCard({ data, classes }: ProductProps) {
  const {
    id,
    name,
    des,
    price,
    // priceType,
    // numOfDownloads,
    platforms,
    cover,
  } = data;

  return (
    <div
      className={`${styles.card} ${classes} transition-all ease-in cursor-pointer`}
      id={id}
    >
      <div
        className={`aspect-[4/3] 2xl:w-full md:w-auto w-full bg-cover bg-center rounded-[16px] md:h-full md:min-w-[312px] `}
        style={{ backgroundImage: `url(${cover})` }}
      ></div>

      <div className={styles.info}>
        <div className={styles.head}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>{price}$/شهر</span>
        </div>

        <p
          className={`flex flex-1 text-ellipsis overflow-hidden max-h-[96px] mb-4`}
        >
          {" "}
          {des}
        </p>

        <div className="flex gap-2">
          {platforms.map((platform) => (
            <span key={platform}>
              {platform === "ios" && <IOS />}
              {platform === "android" && <Android />}
              {platform === "win" && <Win />}
              {platform === "mac" && <Mac />}
              {platform === "web" && <Web />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
