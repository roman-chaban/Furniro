import React from "react";
import styles from "./Shop.module.scss";
import { benefitsDetail } from "@/constants/benefitsContent";

export const Benefits: React.FC = () => {
  return (
    <div className={styles.benefits}>
      {benefitsDetail.map((ben) => (
        <div className={styles.benefitsContainer} key={ben.description}>
          <div className={styles.svgContainer} dangerouslySetInnerHTML={{ __html: ben.svg }} />
          <div className={styles.details}>
            <p className={styles.nameDetail}>{ben.name}</p>
            <p className={styles.descriptionDetail}>{ben.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
