'use client';

import { Fragment, useEffect, useState, type FC } from 'react';
import styles from './OurProducts.module.scss';
import products from '@/api/products/products.json';
import { Product } from '@/interfaces/products';
import Image from 'next/image';
import { Button } from '../UI components/Button/Button';
import { additionalSocials } from '@/constants/additionalMedias';
import { ProductCard } from '../Product/Product';

interface Props {
  isShop: boolean;
}

export const OurProducts: FC<Props> = ({ isShop }) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>();

  useEffect(() => {
    setCurrentProducts(products);
  }, []);

  return (
    <section className={styles.ourProducts}>
      <div className={styles.ourProducts__container}>
        {!isShop && <h2 className={styles.ourProducts__title}>Our Products</h2>}
        <div className={styles.productsCards}>
          {currentProducts?.map((product: Product, indx) => (
            <ProductCard product={product} key={indx + 1} />
          ))}
        </div>
        {!isShop && (
          <Button className={styles.ourProductsShowMoreButton}>
            Show More
          </Button>
        )}
      </div>
    </section>
  );
};
