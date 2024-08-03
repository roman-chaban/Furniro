export interface MenuItem {
  listItem: string;
}

export type Menu = MenuItem[];

export const helpMenu: Menu = [
  {
    listItem: 'Payment Options',
  },
  {
    listItem: 'Returns',
  },
  {
    listItem: 'Privacy Policies',
  },
];
