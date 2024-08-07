import singleProducts from '@/api/products/products.json';
import { ProductDetailView } from '@/components/ProductDetailView/ProductDetailView';
import { ProductNav } from '@/components/ProductNav/ProductNav';

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
    </section>
  );
}
