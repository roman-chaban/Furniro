import { BrowseCategories } from '@/components/BrowseCategories/BrowseCategories';
import { Hero } from '@/components/Hero/Hero';
import { OurProducts } from '@/components/OurProducts/OurProducts';
import { RoomsInspiration } from '@/components/RoomsInspiration/RoomsInspiration';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furniro | Home',
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrowseCategories />
      <OurProducts />
      <RoomsInspiration />
    </>
  );
}
