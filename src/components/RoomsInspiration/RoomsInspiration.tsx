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
          <Image
            src="/images/rooms/roomsBanner.svg"
            alt="Rooms Banner"
            width={405}
            height={582}
          />
        </div>
      </div>
    </section>
  );
};
