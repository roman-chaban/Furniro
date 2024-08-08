import { Product } from '@/interfaces/products';
import { FC } from 'react';
import styles from './ProductDetailView.module.scss';
import { ProductDetailViewGallery } from '../ProductDetailViewGallery/ProductDetailViewGallery';
import { ProductDetailInfo } from '../ProductDetailInfo/ProductDetailInfo';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetailView: FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <ProductDetailViewGallery product={product} />
        <ProductDetailInfo product={product} />
      </div>
    </div>
  );
};
