'use client';
import { Arrow } from '../Button/ArrowLink';
import styles from './Poster.module.scss';

interface Props {
  title: string;
  linkPrev: string;
  linkNext: string;
}

export const Poster: React.FC<Props> = ({ title, linkNext, linkPrev }) => {
  return (
    <div className={styles.posterSection}>
      <div className={styles.linksContainer}>
        <h2 className={styles.shopTitle}>{title}</h2>
        <div className={styles.links}>
          <p className={styles.link}>{linkPrev}</p>
          <Arrow />
          <p className={styles.link}>{linkNext}</p>
        </div>
      </div>
    </div>
  );
};
