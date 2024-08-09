'use client';

import { useEffect, useState, type FC } from 'react';
import styles from './OurProducts.module.scss';
import products from '@/api/products/products.json';
import { Product } from '@/interfaces/products';
import { Button } from '../UI components/Button/Button';
import { ProductCard } from '../Product/Product';

interface Props {
  isShop?: boolean;
  productsTitle: string;
  className?: string;
  numberOfProductsToShow?: number;
}

export const OurProducts: FC<Props> = ({
  isShop,
  productsTitle,
  className,
  numberOfProductsToShow,
}) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  useEffect(() => {
    setCurrentProducts(products);
  }, []);

  const productsToShow = numberOfProductsToShow
    ? currentProducts.slice(0, numberOfProductsToShow)
    : currentProducts;

  return (
    <section className={`${styles.ourProducts} ${styles.relatedProducts}`}>
      <div className={styles.ourProducts__container}>
        {!isShop && (
          <h2 className={`${styles.ourProducts__title} ${className}`}>
            {productsTitle}
          </h2>
        )}
        <div className={styles.productsCards}>
          {productsToShow.length > 0 ? (
            productsToShow.map((product: Product, indx) => (
              <ProductCard product={product} key={indx + 1} />
            ))
          ) : (
            <p>No products available.</p>
          )}
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
