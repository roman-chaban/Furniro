export interface PrimaryListItem {
  id: number;
  mainDescriptor: string;
  subDescriptor: string;
  tertiaryLabel: string;
  quaternaryLabel: string;
  quinaryLabel: string;
  senaryLabel: string;
}

interface GeneralList {
  id: number;
  listTitle: string;
  leftItems: PrimaryListItem[];
  centerItems: PrimaryListItem[];
  rightItems: PrimaryListItem[];
}

type General = GeneralList[];

export const generalList: General = [
  {
    id: 1,
    listTitle: 'General',
    leftItems: [
      {
        id: 2,
        mainDescriptor: 'Sales Package',
        subDescriptor: 'Model Number',
        tertiaryLabel: 'Secondary Material',
        quaternaryLabel: 'Configuration',
        quinaryLabel: 'Upholstery Material',
        senaryLabel: 'Upholstery Color',
      },
    ],
    centerItems: [
      {
        id: 3,
        mainDescriptor: '1 sectional sofa',
        subDescriptor: 'TFCBLIGRBL6SRHS',
        tertiaryLabel: 'Solid Wood',
        quaternaryLabel: 'L-shaped',
        quinaryLabel: 'Fabric + Cotton',
        senaryLabel: 'Bright Grey & Lion',
      },
    ],
    rightItems: [
      {
        id: 4,
        mainDescriptor: '1 Three Seater, 2 Single Seater',
        subDescriptor: 'DTUBLIGRBL568',
        tertiaryLabel: 'Solid Wood',
        quaternaryLabel: 'L-shaped',
        quinaryLabel: 'Fabric + Cotton',
        senaryLabel: 'Bright Grey & Lion',
      },
    ],
  },
];
