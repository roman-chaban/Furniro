import { Poster } from '@/components/UI components/Poster/Poster';
import styles from './Cart.module.scss';

export default function Cart() {
  return (
    <section className={styles.cart}>
      <div className={styles.cartContainer}>
        <Poster title="Cart" linkNext="Cart" linkPrev="Home" />
      </div>
    </section>
  );
}
