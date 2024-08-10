'use client';

import { useState, type FC } from 'react';
import styles from './Header.module.scss';
import { NavigationPaths } from '@/enums/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { navigationFeatures } from '@/constants/navigationFeatures';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { CartSidebar } from '../CartSidebar/CartSidebar';

interface HeaderProps {
  onSidebarToggle: (isVisible: boolean) => void;
}

const navigationPaths = Object.keys(NavigationPaths) as Array<
  keyof typeof NavigationPaths
>;

const logoPath = '/favicon/furniro-favicon.svg';

const Header: FC<HeaderProps> = ({ onSidebarToggle }) => {
  const [isCartSidebarVisible, setIsCartSidebarVisible] =
    useState<boolean>(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    const newVisibility = !isCartSidebarVisible;
    setIsCartSidebarVisible(!isCartSidebarVisible);
    onSidebarToggle(newVisibility);
  };

  const handleCloseSidebar = () => {
    setIsCartSidebarVisible(false);
    onSidebarToggle(false);
  };

  return (
    <>
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
              {navigationPaths.map((link) => {
                const isActive = pathname === NavigationPaths[link];
                return (
                  <li key={link} className={styles.menu__listItem}>
                    <Link
                      href={NavigationPaths[link]}
                      className={`${styles.listLink} ${
                        isActive ? styles.activeLink : ''
                      }`}
                    >
                      {link.charAt(0) + link.slice(1).toLowerCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles.headerNav__features}>
            {navigationFeatures.map((icon) => (
              <Link
                key={icon.id}
                href={icon.path}
                onClick={icon.id === 4 ? toggleSidebar : undefined}
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
      </header>
      {isCartSidebarVisible && <CartSidebar onClose={handleCloseSidebar} />}
    </>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
