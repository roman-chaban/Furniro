export interface CategoryCard {
  image: string;
  title: string;
  href: string;
}

export type CategoryCards = CategoryCard[];

export const categoriesCards: CategoryCards = [
  {
    image: '/images/browse/primary.svg',
    title: 'Dining',
    href: '/dining',
  },
  {
    image: '/images/browse/secondary.svg',
    title: 'Living',
    href: '/living',
  },
  {
    image: '/images/browse/tertiary.svg',
    title: 'Bedroom',
    href: '/bedroom',
  },
];
