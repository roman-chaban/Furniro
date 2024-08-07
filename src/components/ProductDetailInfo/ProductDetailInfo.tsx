import { FC, Fragment } from 'react';
import styles from './ProductDetailInfo.module.scss';
import { Product } from '@/interfaces/products';
import { generateRatingStars } from '@/constants/ratingStars';
import { ProductSizes } from '../ProductSizes/ProductSizes';
import { ProductAvailableColors } from '../ProductAvailableColors/ProductAvailableColors';

interface ProductDetailInfoProps {
  product: Product;
}

export const ProductDetailInfo: FC<ProductDetailInfoProps> = ({ product }) => {
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
      </div>
    </div>
  );
};
