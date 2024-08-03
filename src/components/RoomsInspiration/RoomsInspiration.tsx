import type { FC } from 'react';
import styles from './RoomsInspiration.module.scss';
import { Button } from '../UI components/Button/Button';
import Image from 'next/image';

export const RoomsInspiration: FC = () => {
  return (
    <section className={styles.roomsInspiration}>
      <div className={styles.roomsContainer}>
        <div className={styles.roomsInformation}>
          <h2 className={styles.roomsTitle}>50+ Beautiful rooms inspiration</h2>
          <p className={styles.roomsSubTitle}>
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <Button type="button" className={styles.exploreButton}>
            Explore More
          </Button>
        </div>
        <div className={styles.roomsBanner}>
          <div className={styles.innerPeace}>
            <span className={styles.innerSubTitle}>
              01 <span className={styles.innerLine}></span> Bed Room
            </span>
            <h4 className={styles.innerTitle}>Inner Peace</h4>
          </div>
          <Button type="button" className={styles.innerButton}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12H3M21 12L15 6M21 12L15 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
