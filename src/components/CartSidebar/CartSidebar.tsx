'use client';

import { useEffect, useRef, type FC } from 'react';
import styles from './CartSidebar.module.scss';
import { icon } from '@/constants/shoppingCartIcon';
import { Button } from '../UI components/Button/Button';

interface CartSidebarProps {
  onClose: () => void;
}

export const CartSidebar: FC<CartSidebarProps> = ({ onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      )
        onClose();
    };

    document.body.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.cartSidebar} ref={sidebarRef}>
      <div className={styles.cartSidebarContainer}>
        <div className={styles.cartSidebarHeader}>
          <div className={styles.cartSidebarHeaderTitle}>Shopping Cart</div>
          <span className={styles.closeIcon} onClick={onClose}>
            {icon}
          </span>
        </div>
        <div className={styles.cartSidebarBody}>
          <h4 className={styles.subTotalPrice}>Subtotal</h4>
        </div>
        <div className={styles.cartSidebarFooter}>
          <Button type="button" className={styles.button}>
            Cart
          </Button>
          <Button type="button" className={styles.button}>
            Checkout
          </Button>
          <Button type="button" className={styles.button}>
            Comparison
          </Button>
        </div>
      </div>
    </div>
  );
};
