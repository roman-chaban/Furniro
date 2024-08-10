'use client';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/assets/styles/layout.scss';
import Header from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { MainContainer } from '@/customContainers/mainContainer';
import { useState } from 'react';
import { CartSidebar } from '@/components/CartSidebar/CartSidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const fonts = `${poppins.className}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  const handleSideBarToggle = (isVisible: boolean) => {
    setIsSidebarVisible(isVisible);
  };

  return (
    <html lang="en">
      <head>
        <title>Furniro</title>
        <link
          rel="shortcut icon"
          href="/favicon/furniro-favicon.svg"
          type="image/x-icon"
        />
      </head>
      <body className={`${fonts}`}>
        <MainContainer>
          <Header onSidebarToggle={handleSideBarToggle} />
          <main className="main">{children}</main>
          <Footer />
          {isSidebarVisible && (
            <>
              <div className="background-overlay"></div>
              <CartSidebar />
            </>
          )}
        </MainContainer>
      </body>
    </html>
  );
}
