'use client';

import type { FC } from 'react';
import styles from './ProductDetailCounter.module.scss';
import { useProductCounter } from '@/hooks/useProductCounter';
import { Button } from '../UI components/Button/Button';

export const ProductDetailCounter: FC = () => {
  const [
    productItemCounter,
    onAddProductItemCounter,
    onDeleteProductItemCounter,
  ] = useProductCounter({ counterItem: 1 });

  return (
    <div className={styles.ItemsCounterContainer}>
      <div className={styles.counterDetailsContainer}>
        <button
          className={styles.counterIncrementButton}
          onClick={onAddProductItemCounter}
        >
          +
        </button>
        <span style={{ fontWeight: 500 }}>{productItemCounter}</span>
        <button
          className={styles.counterDecrementButton}
          onClick={onDeleteProductItemCounter}
        >
          -
        </button>
      </div>
      <Button className={styles.button} >Add to Cart</Button>
      <Button className={styles.button} >+ Compare</Button>
    </div>
  );
};
