'use client';

import { FC, useEffect, useState } from 'react';
import styles from './ProductDetailInfo.module.scss';
import { Product } from '@/interfaces/products';
import { generateRatingStars } from '@/constants/ratingStars';
import { ProductSizes } from '../ProductSizes/ProductSizes';
import { ProductAvailableColors } from '../ProductAvailableColors/ProductAvailableColors';
import { ProductDetailCounter } from '../ProductDetailCounter/ProductDetailCounter';
import { DetailInfo } from '@/constants/detailsInfo';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'grommet-icons';

interface ProductDetailInfoProps {
  product: Product;
}

export const detailsInformation: DetailInfo[] = [
  {
    id: 1,
    SKU: 'SS001',
    Category: '',
    Tags: 'Sofa, Chair, Home, Shop',
    Share: [
      {
        platform: 'facebook',
        icon: <Facebook color="black" style={{ width: 20, height: 20 }} />,
      },
      {
        platform: 'linkedin',
        icon: <Linkedin color="black" style={{ width: 20, height: 20 }} />,
      },
      {
        platform: 'twitter',
        icon: <Twitter color="black" style={{ width: 20, height: 20 }} />,
      },
    ],
  },
];

export const ProductDetailInfo: FC<ProductDetailInfoProps> = ({ product }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.productInfo}>
      <div className={styles.infoBlock}>
        <div className={styles.infoTitles}>
          <h1 className={styles.infoTitle}>{product.productName}</h1>
          <p className={styles.infoPriceSubTitle}>{product.originalPrice}</p>
        </div>
        <div className={styles.infoRatingDescriptionBlock}>
          <div className={styles.infoRatingBlock}>
            {generateRatingStars(product.rating).map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </div>
          <span className={styles.centeredElement}></span>
          <h4 className={styles.review}>
            {Math.ceil(product.rating)} Customer Review
          </h4>
        </div>
        <p className={styles.infoDescriptionTitle}>
          {product.productDescription}
        </p>
        <ProductSizes />
        <ProductAvailableColors colors={product.colorsAvailable} />
        <ProductDetailCounter />
        {detailsInformation.map((detail) => (
          <div key={detail.id} className={styles.detailInfo}>
            <div className={styles.detailTitleBlock}>
              <span className={styles.shortTitle}>SKU</span>
              <span className={styles.detailTitle}>{detail.SKU}</span>
            </div>
            <div className={styles.detailTitleBlock}>
              <span className={styles.shortTitle}>Category</span>
              <span className={styles.detailTitle}>
                {product.shortDescription}
              </span>
            </div>
            <div className={styles.detailTitleBlock}>
              <span className={styles.shortTitle}>Tags</span>
              <span className={styles.detailTitle}>{detail.Tags}</span>
            </div>

            <div className={styles.detailShareMedias}>
              <span className={styles.shortTitle}>Share</span>
              <div className={styles.mediaBlockItems}>
                {isClient &&
                  detail.Share.map((media) => (
                    <button
                      key={media.platform}
                      className={styles.mediaBlockItem}
                    >
                      <Link
                        href={`https://${media.platform}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialMediaIcon}
                      >
                        {media.icon}
                      </Link>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
