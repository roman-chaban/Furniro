export interface PrimaryListItem {
  id: number;
  mainDescriptor: string;
  subDescriptor: string;
  tertiaryLabel: string;
  quaternaryLabel: string;
  quinaryLabel: string;
  senaryLabel?: string;
}

interface DimensionsList {
  id: number;
  listTitle: string;
  leftItems: PrimaryListItem[];
  centerItems: PrimaryListItem[];
  rightItems: PrimaryListItem[];
}

type Dimensions = DimensionsList[];

export const dimensionsList: Dimensions = [
  {
    id: 1,
    listTitle: 'Dimensions',
    leftItems: [
      {
        id: 2,
        mainDescriptor: 'Width',
        subDescriptor: 'Height',
        tertiaryLabel: 'Depth',
        quaternaryLabel: 'Weight',
        quinaryLabel: 'Seat Height',
        senaryLabel: 'Leg Height',
      },
    ],
    centerItems: [
      {
        id: 3,
        mainDescriptor: '265.32 cm',
        subDescriptor: '76 cm',
        tertiaryLabel: '167.76 cm',
        quaternaryLabel: '45 KG',
        quinaryLabel: '41.52 cm',
        senaryLabel: '5.46 cm',
      },
    ],
    rightItems: [
      {
        id: 4,
        mainDescriptor: '265.32 cm',
        subDescriptor: '76 cm',
        tertiaryLabel: '167.76 cm',
        quaternaryLabel: '65 KG',
        quinaryLabel: '41.52 cm',
        senaryLabel: '5.46 cm',
      },
    ],
  },
];
