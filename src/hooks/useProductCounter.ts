import { useCallback, useState } from 'react';

interface ProductCounterProps {
  counterItem: number;
}

export const useProductCounter = ({ counterItem }: ProductCounterProps) => {
  const [productItemCounter, setProductItemCounter] =
    useState<number>(counterItem);

  const onAddProductItemCounter = useCallback(() => {
    setProductItemCounter((prevItemCounter) => prevItemCounter + 1);
  }, []);

  const onDeleteProductItemCounter = useCallback(() => {
    setProductItemCounter((prevItemCounter) =>
      Math.max(prevItemCounter - 1, 0)
    );
  }, []);

  return [
    productItemCounter,
    onAddProductItemCounter,
    onDeleteProductItemCounter,
  ] as const;
};
