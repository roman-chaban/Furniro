import type { FC } from "react";
import styles from "./Shop.module.scss";
import { Arrow } from "../UI components/Button/ArrowLink";
import { ProductHeader } from "./ProductHeader";
import { OurProducts } from "../OurProducts/OurProducts";
import { Pagination } from "./Pangination";
import { Benefits } from "./Benefits";

export const ShopComponent: FC = () => {
  let isShop = true;

  return (
    <section className={styles.shopSection}>
      <div className={styles.posterSection}>
        <div className={styles.linksContainer}>
          <h2 className={styles.shopTitle}>Shop</h2>
          <div className={styles.links}>
            <p className={styles.link}>Home</p>
            <Arrow />
            <p className={styles.link}>Shop</p>
          </div>
        </div>
      </div>
      <div className={styles.productSection}>
        <ProductHeader />
        <div className={styles.productList}>
          <OurProducts isShop={true} />
          <Pagination />
        </div>
      </div>
      <Benefits />
    </section>
  );
};
