'use client';

import { useState, type FC } from 'react';
import styles from './AboutNav.module.scss';

interface AboutNavProps {
  navLabels: {
    description: string;
    additionalInformation: string;
    reviews: string;
  };
  onTabClick: (tab: string) => void;
  activeTab: string;
  reviewsRating: string;
}

export const AboutNav: FC<AboutNavProps> = ({ navLabels, onTabClick, activeTab, reviewsRating }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
      <li
          className={`${styles.navMenuListItem} ${activeTab === 'description' ? styles.active : ''}`}
          onClick={() => onTabClick('description')}
        >
          {navLabels.description}
        </li>
        <li
          className={`${styles.navMenuListItem} ${activeTab === 'additionalInformation' ? styles.active : ''}`}
          onClick={() => onTabClick('additionalInformation')}
        >
          {navLabels.additionalInformation}
        </li>
        <li
          className={`${styles.navMenuListItem} ${activeTab === 'reviews' ? styles.active : ''}`}
          onClick={() => onTabClick('reviews')}
        >
          {navLabels.reviews} {`[${Math.ceil(+reviewsRating)}]`}
        </li>
      </ul>
    </nav>
  );
};
