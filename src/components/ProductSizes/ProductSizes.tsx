'use client';

import { useState, FC } from 'react';
import styles from './ProductSizes.module.scss';

export const ProductSizes: FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(1);

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  const getButtonStyle = (index: number) => {
    return activeButton === index
      ? { background: '#B88E2F', color: '#fff' }
      : { background: '#f9f1e7', color: '#000' };
  };

  const sizesButtonsLabels: Array<JSX.Element> = [
    <button
      className={styles.button}
      key={1}
      style={getButtonStyle(1)}
      onClick={() => handleClick(1)}
    >
      L
    </button>,
    <button
      className={styles.button}
      key={2}
      style={getButtonStyle(2)}
      onClick={() => handleClick(2)}
    >
      XL
    </button>,
    <button
      className={styles.button}
      key={3}
      style={getButtonStyle(3)}
      onClick={() => handleClick(3)}
    >
      XS
    </button>,
  ];

  return (
    <div className={styles.buttonsBlock}>
      <span className={styles.sizesTitle}>Sizes </span>
      <div className={styles.buttons}>{sizesButtonsLabels}</div>
    </div>
  );
};
