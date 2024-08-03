export interface MenuItem {
  listItem: string;
  href: string;
}

export type Menu = MenuItem[];

export const footerMenu: Menu = [
  {
    listItem: 'Home',
    href: '/',
  },
  {
    listItem: 'Shop',
    href: '/shop',
  },
  {
    listItem: 'About',
    href: '/About',
  },
  {
    listItem: 'Contact',
    href: '/contact',
  },
];
