import type { FC } from 'react';
import styles from './Shop.module.scss';
import { ProductHeader } from './ProductHeader';
import { OurProducts } from '../OurProducts/OurProducts';
import { Pagination } from './Pangination';
import { Benefits } from './Benefits';
import { Poster } from '../UI components/Poster/Poster';

export const ShopComponent: FC = () => {
  return (
    <section className={styles.shopSection}>
      <Poster title={'Shop'} linkPrev={'Home'} linkNext={'Shop'} />
      <div className={styles.productSection}>
        <ProductHeader />
        <div className={styles.productList}>
          <OurProducts isShop={true} className={''} productsTitle="" />
          <Pagination />
        </div>
      </div>
      <Benefits />
    </section>
  );
};
