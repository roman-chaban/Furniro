import type { FC } from 'react';
import styles from './BrowseCategories.module.scss';
import {
  categoriesCards,
  CategoryCard,
} from '@/constants/browseCategoriesCards';
import Image from 'next/image';
import Link from 'next/link';

export const BrowseCategories: FC = () => {
  return (
    <section className={styles.browseCategories}>
      <div className={styles.browseContainer}>
        <div className={styles.browseTitles}>
          <h2 className={styles.browseTitle}>Browse The Range</h2>
          <p className={styles.browseSubTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.browseCategoriesCards}>
          {categoriesCards.map((card: CategoryCard) => (
            <div className={styles.categoryCard} key={card.title}>
              <Image
                className={styles.cardImage}
                src={card.image}
                alt={card.title}
                width={381}
                height={400}
              />
              <Link href={card.href}>
                <h4 className={styles.categoryCardTitle}>{card.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
