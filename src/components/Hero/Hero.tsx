import type { FC } from 'react';
import styles from './Hero.module.scss';
import { Button } from '@/components/UI components/Button/Button';

export const Hero: FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroBanner}>
          <h4 className={styles.heroSubtitle}>New Arrival</h4>
          <h1 className={styles.heroTitle}>Discover Our New Collection</h1>
          <p className={styles.heroDescription}>
            Furniro is an innovative platform aimed at transforming the
            furniture shopping experience through cutting-edge technology and
            user-centered design.
          </p>
          <Button type="button" className={styles.heroButton}>
            BUY Now
          </Button>
        </div>
      </div>
    </section>
  );
};
