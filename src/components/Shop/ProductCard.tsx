import type { FC } from "react";
import styles from "./Shop.module.scss";
import Image from "next/image";

export const ProcuctCard: FC = () => {
  return (
    <section className={styles.productCard}>
      <Image
        className={styles.productImg}
        src=""
        alt="product"
        width={500}
        height={300}
      />
      <div className={styles.discont}></div>
      <div className={styles.cardBottom}>
      </div>
    </section>
  );
};
