import { Hero } from '@/components/Hero/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furniro | Home',
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
