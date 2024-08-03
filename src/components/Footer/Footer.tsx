'use client';

import { ChangeEvent, useState, type FC } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { footerMenu } from '@/constants/LinksMenu';
import { helpMenu } from '@/constants/HelpMenu';
import { Input } from '../UI components/Input/Input';
import { Button } from '../UI components/Button/Button';

export const Footer: FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footerMenu}>
          <div className={styles.footerLogo}>
            <h3 className={styles.logo}>Furniro.</h3>
            <p className={styles.logoSubTitle}>
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>
          <div className={styles.footerMenus}>
            <ul className={styles.linksMenu}>
              <h5 className={styles.linksMenuTitle}>Links</h5>
              {footerMenu.map((item) => (
                <li key={item.listItem} className={styles.listItem}>
                  <Link href={item.href} className={styles.listLink}>
                    {item.listItem}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles.helpMenu}>
              <h5 className={styles.helpMenuTitle}>Help</h5>
              {helpMenu.map((item) => (
                <li key={item.listItem} className={styles.listItem}>
                  {item.listItem}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerNewsLetter}>
            <h4 className={styles.newsLetterTitle}>Newsletter</h4>
            <form
              action=""
              className={styles.newsLetterForm}
            >
              <label htmlFor="email" className={styles.newsLetterLabel}>
                <Input
                  name="email"
                  id="email"
                  ariaLabel="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  className={styles.newsLetterInput}
                />
              </label>
              <Button type='button' className={styles.subscribeButton}>SUBSCRIBE</Button>
            </form>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          2024 Furniro. All rights reserved
        </div>
      </div>
    </footer>
  );
};
