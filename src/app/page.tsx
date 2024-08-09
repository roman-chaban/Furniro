import { BrowseCategories } from '@/components/BrowseCategories/BrowseCategories';
import { FurnituroGallery } from '@/components/FurnituroGallery/FurnituroGallery';
import { Hero } from '@/components/Hero/Hero';
import { OurProducts } from '@/components/OurProducts/OurProducts';
import { RoomsInspiration } from '@/components/RoomsInspiration/RoomsInspiration';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furniro | Home',
};

export default function Home() {
  let isShop = false;

  return (
    <>
      <Hero />
      <BrowseCategories />
      <OurProducts isShop={isShop} productsTitle="Our Products" />
      <RoomsInspiration />
      <FurnituroGallery />
    </>
  );
}
