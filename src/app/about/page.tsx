import type { Metadata } from 'next';
import { About as AboutComponent } from '@/components/About/About';

export const metadata: Metadata = {
  title: 'Furniro | About',
};

export default function About() {
  return (
    <section>
      <AboutComponent />
    </section>
  );
}
