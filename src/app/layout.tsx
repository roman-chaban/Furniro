import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import '@/assets/styles/layout.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
});

const fonts = `${poppins.className} ${montserrat.className}`;

export const metadata: Metadata = {
  title: 'Furniro',
  description:
    'Furniro is an innovative platform aimed at transforming the furniture shopping experience through cutting-edge technology and user-centered design. Our goal is to create a comprehensive and intuitive online marketplace that makes furniture shopping both efficient and enjoyable.',
  icons: '/favicon/furniro-favicon.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
