'use client';

import { Fragment, type FC } from 'react';
import styles from './About.module.scss';
import { Poster } from '../UI components/Poster/Poster';
import Link from 'next/link';
import { NavigationPaths } from '@/enums/navigation';
import {
  ComparisonProductItem,
  comparisonProducts,
} from '@/interfaces/comparisonProducts';
import { DropDown } from '../UI components/DropDown/DropDown';

export const About: FC = () => {
  const handleSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className={styles.about}>
      <Poster
        title="Product Comparison"
        linkNext="Comparison"
        linkPrev="Home"
      />
      <div className={styles.aboutPreviewBlock}>
        <div className={styles.previewPrimaryBlock}>
          <h2 className={styles.previewTitle}>
            Go to Product page for more Products
          </h2>
          <Link href={NavigationPaths.SHOP} className={styles.previewLink}>
            View More
          </Link>
        </div>
        <div className={styles.previewSecondaryBlock}>
          {comparisonProducts.map((product: ComparisonProductItem) => (
            <div key={product.productId} className={styles.product}>
              <div className={styles.productContainer}>
                <div className={styles.productImageBlock}>
                  <div
                    className={styles.productImage}
                    style={{ background: `url(${product.imageUrl})` }}
                  ></div>
                </div>
                <h3 className={styles.productTitle}>{product.productName}</h3>
                <p className={styles.productSubTitle}>
                  {product.productSubtitle}
                </p>

                <div className={styles.reviewsBlock}>
                  <span className={styles.reviewsRating}>
                    {product.averageRating}
                  </span>
                  <div className={styles.stars}>
                    {product.ratingStars.map((star, index) => (
                      <Fragment key={index}>
                        {star.icon}
                      </Fragment>
                    ))}
                  </div>
                  <h5 className={styles.reviewsCustomers}>
                    {product.customerReview}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.previewTertiaryBlock}>
          <h3 className={styles.addProductTitle}>Add A Product</h3>
          <DropDown
            options={['Primary', 'Secondary', 'Tertiary']}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
};
