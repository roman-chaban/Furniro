'use client';

import type { FC } from 'react';
import styles from './ProductNav.module.scss';
import Link from 'next/link';
import { FormNext } from 'grommet-icons';
import { NavigationPaths } from '@/enums/navigation';

interface ProductNavProps {
  productName: string;
}

export const ProductNav: FC<ProductNavProps> = ({ productName }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
        <li className={styles.listItem}>
          <Link href={NavigationPaths.HOME} className={styles.listLink}>
            Home <FormNext style={{ width: 20, height: 20 }} color="plain" />{' '}
          </Link>
        </li>
        <li className={`${styles.listItem} ${styles.afterDecoration}`}>
          <Link href={NavigationPaths.SHOP} className={styles.listLink}>
            Shop <FormNext style={{ width: 20, height: 20 }} color="plain" />{' '}
          </Link>
        </li>
        <li className={styles.listItem}>{productName}</li>
      </ul>
    </nav>
  );
};
