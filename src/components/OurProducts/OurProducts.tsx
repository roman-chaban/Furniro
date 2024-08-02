'use client';

import { Fragment, useEffect, useState, type FC } from 'react';
import styles from './OurProducts.module.scss';
import products from '@/api/products/products.json';
import { Product } from '@/interfaces/products';
import Image from 'next/image';
import { Button } from '../UI components/Button/Button';
import { additionalSocials } from '@/constants/additionalMedias';

export const OurProducts: FC = () => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>();

  useEffect(() => {
    setCurrentProducts(products);
  }, []);

  return (
    <section className={styles.ourProducts}>
      <div className={styles.ourProducts__container}>
        <h2 className={styles.ourProducts__title}>Our Products</h2>
        <div className={styles.productsCards}>
          {currentProducts?.map((product: Product) => (
            <div key={product.productName} className={styles.productCard}>
              <div className={styles.productImageBlock}>
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  className={styles.productCardImage}
                  width={285}
                  height={301}
                />
                <span
                  className={styles.discountPercentage}
                  style={{
                    background:
                      product.discountPercentage === ''
                        ? 'none'
                        : product.discountPercentage === 'New'
                        ? '#2ec1ac'
                        : '',
                  }}
                >
                  {product.discountPercentage}
                </span>
              </div>
              <div className={styles.productCardInfo}>
                <h3 className={styles.productCardTitle}>
                  {product.productName}
                </h3>
                <p className={styles.productCardSubTitle}>
                  {product.shortDescription}
                </p>
                <div className={styles.productCardPrices}>
                  <span className={styles.productCarOriginalPrice}>
                    {product.originalPrice}
                  </span>
                  <span className={styles.productCardDiscountedPrice}>
                    {product.discountedPrice}
                  </span>
                </div>
              </div>
              <div className={styles.additionalInfo}>
                <Button className={styles.infoButton}>Add to cart</Button>
                <div className={styles.additionalSocial}>
                  {additionalSocials.map((item) => (
                    <div className={styles.additionalInfoItems} key={item.id}>
                      {item.icon}
                      <h4 className={styles.additionalInfoTitle}>
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className={styles.ourProductsShowMoreButton}>Show More</Button>
      </div>
    </section>
  );
};
