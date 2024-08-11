export interface PrimaryListItem {
  id: number;
  mainDescriptor: string;
  subDescriptor: string;
  tertiaryLabel: string;
  quaternaryLabel: string;
  quinaryLabel: string;
  senaryLabel?: string;
}

interface WarrantyList {
  id: number;
  listTitle: string;
  leftItems: PrimaryListItem[];
  centerItems: PrimaryListItem[];
  rightItems: PrimaryListItem[];
}

type Product = WarrantyList[];

export const warrantyList: Product = [
  {
    id: 1,
    listTitle: 'Warranty',
    leftItems: [
      {
        id: 2,
        mainDescriptor: 'Warranty Summary',
        subDescriptor: 'Warranty Service Type',
        tertiaryLabel: 'Covered in Warranty',
        quaternaryLabel: 'Not Covered in Warranty',
        quinaryLabel: 'Domestic Warranty',
      },
    ],
    centerItems: [
      {
        id: 3,
        mainDescriptor: '1 Year Manufacturing Warranty',
        subDescriptor:
          'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
        tertiaryLabel: 'Warranty Against Manufacturing Defect',
        quaternaryLabel:
          'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
        quinaryLabel: '1 Year',
      },
    ],
    rightItems: [
      {
        id: 4,
        mainDescriptor: '1.2 Year Manufacturing Warranty',
        subDescriptor:
          'For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com',
        tertiaryLabel:
          'Warranty Against Manufacturing Defect',
        quaternaryLabel:
          'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
        quinaryLabel: '3 Months',
      },
    ],
  },
];
