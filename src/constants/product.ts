export interface PrimaryListItem {
  id: number;
  mainDescriptor: string;
  subDescriptor: string;
  tertiaryLabel: string;
  quaternaryLabel: string;
  quinaryLabel: string;
  senaryLabel?: string;
}

interface ProductList {
  id: number;
  listTitle: string;
  leftItems: PrimaryListItem[];
  centerItems: PrimaryListItem[];
  rightItems: PrimaryListItem[];
}

type Product = ProductList[];

export const productList: Product = [
  {
    id: 1,
    listTitle: 'Product ',
    leftItems: [
      {
        id: 2,
        mainDescriptor: 'Filling Material',
        subDescriptor: 'Finish Type',
        tertiaryLabel: 'Adjustable Headrest',
        quaternaryLabel: 'Maximum Load Capacity',
        quinaryLabel: 'Origin of Manufacture',
      },
    ],
    centerItems: [
      {
        id: 3,
        mainDescriptor: 'Foam',
        subDescriptor: 'Bright Grey & Lion',
        tertiaryLabel: 'No',
        quaternaryLabel: '280 KG',
        quinaryLabel: 'India',
      },
    ],
    rightItems: [
      {
        id: 4,
        mainDescriptor: 'Matte',
        subDescriptor: 'Bright Grey & Lion',
        tertiaryLabel: 'yes',
        quaternaryLabel: '300 KG',
        quinaryLabel: 'India',
      },
    ],
  },
];
