import type { FC } from 'react';
import { Button } from '../UI components/Button/Button';
import styles from '@/components/OurProducts/OurProducts.module.scss';
import { Product } from '@/interfaces/products';
import Image from 'next/image';
import { additionalSocials } from '@/constants/additionalMedias';
import Link from 'next/link';

interface ProductProps {
  product: Product;
}

export const ProductCard: FC<ProductProps> = ({ product }) => {
  return (
    <div key={product.productName} className={styles.productCard}>
      <Link href={`/${product.productName}`}>
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
          <h3 className={styles.productCardTitle}>{product.productName}</h3>
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
                <h4 className={styles.additionalInfoTitle}>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
