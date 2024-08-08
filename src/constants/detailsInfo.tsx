import { Facebook, Linkedin, Twitter } from 'grommet-icons';

export interface SocialMedia {
  platform: string;
  icon: JSX.Element;
}

export interface DetailInfo {
  id: number;
  SKU: string;
  Category: string;
  Tags: string;
  Share: SocialMedia[];
}

