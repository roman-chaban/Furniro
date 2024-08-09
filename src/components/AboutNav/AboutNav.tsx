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

export const enum NavLabels {
  DESCRIPTION = 'description',
  ADDITIONAL = 'additionalInformation',
  REVIEWS = 'reviews',
}
export const AboutNav: FC<AboutNavProps> = ({
  navLabels,
  onTabClick,
  activeTab,
  reviewsRating,
}) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
        <li
          className={`${styles.navMenuListItem} ${
            activeTab === NavLabels.DESCRIPTION ? styles.active : ''
          }`}
          onClick={() => onTabClick(NavLabels.DESCRIPTION)}
        >
          {navLabels.description}
        </li>
        <li
          className={`${styles.navMenuListItem} ${
            activeTab === NavLabels.ADDITIONAL ? styles.active : ''
          }`}
          onClick={() => onTabClick(NavLabels.ADDITIONAL)}
        >
          {navLabels.additionalInformation}
        </li>
        <li
          className={`${styles.navMenuListItem} ${
            activeTab === NavLabels.REVIEWS ? styles.active : ''
          }`}
          onClick={() => onTabClick(NavLabels.REVIEWS)}
        >
          {navLabels.reviews} {`[${Math.ceil(+reviewsRating)}]`}
        </li>
      </ul>
    </nav>
  );
};
