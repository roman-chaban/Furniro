'use client';

import type { FC } from 'react';
import styles from './Header.module.scss';
import { NavigationPaths } from '@/enums/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { navigationFeatures } from '@/constants/navigationFeatures';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const navigationPaths = Object.keys(NavigationPaths) as Array<
  keyof typeof NavigationPaths
>;

const logoPath = '/favicon/furniro-favicon.svg';

const Header: FC = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Image
            priority
            src={logoPath}
            alt="Furniro Logo"
            width={50}
            height={50}
          />
          <h2 className={styles.headerLogo__capture}>Furniro</h2>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.menu}>
            {navigationPaths.map((link) => (
              <li key={link} className={styles.menu__listItem}>
                <Link href={NavigationPaths[link]} className={styles.listLink}>
                  {link.charAt(0) + link.slice(1).toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.headerNav__features}>
          {navigationFeatures.map((icon) => (
            <Link key={icon.id} href={icon.path}>
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
