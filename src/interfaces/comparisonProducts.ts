import { fullStar, halfStar } from '@/constants/ratingStars';

export interface ComparisonProductItem {
  productId: number;
  imageUrl: string;
  productName: string;
  productSubtitle: string;
  averageRating: string;
  ratingStars: { icon: JSX.Element; id: number }[];
  customerReview: string;
}

export const comparisonProducts: ComparisonProductItem[] = [
  {
    productId: 1,
    imageUrl: '/images/comparison/primaryImage.svg',
    productName: 'Asgard Sofa',
    averageRating: '4.7',
    ratingStars: [
      { icon: fullStar, id: 1 },
      { icon: fullStar, id: 2 },
      { icon: fullStar, id: 3 },
      { icon: fullStar, id: 4 },
      { icon: halfStar, id: 1 },
    ],
    customerReview: '204 Review',
    productSubtitle: 'Rs. 250,000.00',
  },
  {
    productId: 2,
    imageUrl: '/images/comparison/secondaryImage.svg',
    productName: 'Outdoor Sofa Set',
    averageRating: '4.2',
    ratingStars: [
      { icon: fullStar, id: 1 },
      { icon: fullStar, id: 2 },
      { icon: fullStar, id: 3 },
      { icon: fullStar, id: 4 },
      { icon: halfStar, id: 1 },
    ],
    customerReview: '145 Review',
    productSubtitle: 'Rs. 224,000.00',
  },
];
