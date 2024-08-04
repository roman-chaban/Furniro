import { Contacts } from '@/components/Contacts/Contacts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furniro | Contact',
};

export default function Contact() {
  return <section><Contacts /></section>;
}
