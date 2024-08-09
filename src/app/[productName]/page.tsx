import singleProducts from '@/api/products/products.json';
import { AboutProduct } from '@/components/AboutProduct/AboutProduct';
import { OurProducts } from '@/components/OurProducts/OurProducts';
import { ProductDetailView } from '@/components/ProductDetailView/ProductDetailView';
import { ProductNav } from '@/components/ProductNav/ProductNav';
import styles from '@/components/OurProducts/OurProducts.module.scss';

interface ProductProps {
  params: { productName: string };
}

export default function ProductDetail({
  params: { productName },
}: ProductProps) {
  const findProduct = singleProducts.find(
    (product) => product.productName === productName
  );
  return (
    <section>
      <ProductNav productName={productName} />
      <ProductDetailView product={findProduct!} />
      <AboutProduct reviewsRating={String(findProduct?.rating)} />
      <OurProducts
        productsTitle="Related Products"
        className={styles.title}
        numberOfProductsToShow={4}
      />
    </section>
  );
}
