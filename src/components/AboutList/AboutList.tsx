import type { FC } from 'react';
import styles from './AboutList.module.scss';
import { generalList } from '@/constants/general';
import { productList, PrimaryListItem } from '@/constants/product';
import { dimensionsList } from '@/constants/dimensions';
import { warrantyList } from '@/constants/warranty';

const ListItem: FC<{ items: PrimaryListItem[]; isLastList?: boolean }> = ({
  items,
  isLastList,
}) => (
  <>
    {items.map((item) => (
      <div
        className={`${styles.list} ${isLastList ? styles.listMoreGap : ''}`}
        key={item.id}
      >
        <li
          className={`${styles.title} ${isLastList ? styles.heightTitle : ''}`}
        >
          {item.mainDescriptor}
        </li>
        <li
          className={`${styles.title} ${isLastList ? styles.heightTitle : ''}`}
        >
          {item.subDescriptor}
        </li>
        <li
          className={`${styles.title} ${isLastList ? styles.heightTitle : ''}`}
        >
          {item.tertiaryLabel}
        </li>
        <li
          className={`${styles.title} ${isLastList ? styles.heightTitle : ''}`}
        >
          {item.quaternaryLabel}
        </li>
        <li
          className={`${styles.title} ${isLastList ? styles.heightTitle : ''}`}
        >
          {item.quinaryLabel}
        </li>
        {item.senaryLabel && (
          <li className={styles.title}>{item.senaryLabel}</li>
        )}
      </div>
    ))}
  </>
);

const ListSection: FC<{
  title: string;
  leftItems: PrimaryListItem[];
  centerItems: PrimaryListItem[];
  rightItems: PrimaryListItem[];
  isLastList?: boolean;
  centerListButton?: React.ReactNode;
  rightListButton?: React.ReactNode;
}> = ({
  title,
  leftItems,
  centerItems,
  rightItems,
  isLastList,
  centerListButton,
  rightListButton,
}) => (
  <div className={styles.listContainer}>
    <h3 className={styles.generalTitle}>{title}</h3>
    <div
      className={`${styles.listFlex} ${isLastList ? styles.warrantyList : ''}`}
    >
      <div className={styles.leftList}>
        <ListItem items={leftItems} isLastList={isLastList} />
      </div>
      <div className={styles.centerList}>
        <ListItem items={centerItems} />
        {centerListButton && (
          <div className={styles.buttonContainer}>{centerListButton}</div>
        )}
      </div>
      <div className={styles.rightList}>
        <ListItem items={rightItems} />
        {rightListButton && (
          <div className={styles.buttonContainer}>{rightListButton}</div>
        )}
      </div>
    </div>
  </div>
);

export const AboutList: FC = () => {
  return (
    <ul className={styles.generalList}>
      {generalList.map((item) => (
        <ListSection
          key={item.id}
          title={item.listTitle}
          leftItems={item.leftItems}
          centerItems={item.centerItems}
          rightItems={item.rightItems}
        />
      ))}
      {productList.map((item) => (
        <ListSection
          key={item.id}
          title={item.listTitle}
          leftItems={item.leftItems}
          centerItems={item.centerItems}
          rightItems={item.rightItems}
        />
      ))}
      {dimensionsList.map((item) => (
        <ListSection
          key={item.id}
          title={item.listTitle}
          leftItems={item.leftItems}
          centerItems={item.centerItems}
          rightItems={item.rightItems}
        />
      ))}
      {warrantyList.map((item) => (
        <ListSection
          key={item.id}
          title={item.listTitle}
          leftItems={item.leftItems}
          centerItems={item.centerItems}
          rightItems={item.rightItems}
          isLastList={true}
          centerListButton={
            <button className={styles.button}>Add to cart</button>
          }
          rightListButton={
            <button className={styles.button}>Add to cart</button>
          }
        />
      ))}
    </ul>
  );
};
