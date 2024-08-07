
interface DetailImages {
  main: string;
  primary: string;
  secondary: string;
  tertiary: string;
  fourth: string;
}

export interface Product {
  imageUrl: string;
  discountPercentage: string;
  productName: string;
  shortDescription: string;
  originalPrice: string;
  discountedPrice: string;
  detailImages: Array<DetailImages>;
  rating: number;
  colorsAvailable: Array<string>;
  productDescription: string;
}
