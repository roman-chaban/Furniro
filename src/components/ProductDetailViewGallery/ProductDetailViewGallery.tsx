import { FC, Fragment } from 'react';
import styles from '@/components/ProductDetailView/ProductDetailView.module.scss';
import { Product } from '@/interfaces/products';

interface ProductDetailViewGalleryProps {
  product: Product;
}

export const ProductDetailViewGallery: FC<ProductDetailViewGalleryProps> = ({
  product,
}) => {
  return (
    <Fragment>
      {product.detailImages.map((image, indx) => (
        <div key={indx + 1} className={styles.productGallery}>
          <div className={styles.smallImagesBlock}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image.primary})` }}
              aria-label={product.productName}
            />
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image.secondary})` }}
              aria-label={product.productName}
            />
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image.tertiary})` }}
              aria-label={product.productName}
            />
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image.fourth})` }}
              aria-label={product.productName}
            />
          </div>
          <div className={styles.mainImageBlock}>
            <div
              className={styles.mainImage}
              style={{ backgroundImage: `url(${image.main})` }}
              aria-label={product.productName}
            />
          </div>
        </div>
      ))}
    </Fragment>
  );
};
