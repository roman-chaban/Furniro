'use client';

import { useState, type FC } from 'react';
import { AboutNav } from '../AboutNav/AboutNav';
import styles from './AboutProduct.module.scss';
import Image from 'next/image';

export const navLabels: {
  description: string;
  additionalInformation: string;
  reviews: string;
} = {
  description: 'Description',
  additionalInformation: 'Additional Information',
  reviews: 'Reviews',
};

export const AboutProduct: FC<{ reviewsRating: string }> = ({
  reviewsRating,
}) => {
  const [activeTab, setActiveTab] = useState<string>('description');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.about}>
      <AboutNav
        reviewsRating={reviewsRating}
        navLabels={navLabels}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <div className={styles.aboutContent}>
        {activeTab === 'description' && (
          <div className={styles.aboutSubHeadings}>
            <p className={styles.primarySubHeading}>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className={styles.secondarySubHeading}>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        )}
        {activeTab === 'additionalInformation' && (
          <div className={styles.additionalInformation}>
            <p className={styles.primarySubHeading}>
              Dimensions: Our products come in a variety of sizes to suit
              different spaces. Each product page provides detailed dimensions
              to help you select the perfect fit for your home. Materials: We
              use high-quality materials, including solid wood, premium fabrics,
              and durable metals. Each material is chosen for its longevity and
              aesthetic appeal. Care Instructions: To maintain the beauty and
              durability of our furniture, we provide specific care instructions
              for each material type. Please refer to the product care guide to
              ensure your furniture stays in pristine condition.
            </p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className={styles.reviews}>
            <p className={styles.primarySubHeading}>
              At Furniro, we take pride in the quality of our products and the
              satisfaction of our customers. Our reviews section showcases
              honest feedback from people who have purchased and used our
              furniture. Here’s what some of our customers have to say: Real
              Experiences: Read first-hand accounts of how our furniture fits
              into real homes. Our customers share their experiences, from the
              ease of assembly to the comfort and durability of our pieces.
              Ratings: Each product is rated on a scale of 1 to 5 stars based on
              customer satisfaction. See how our products measure up and find
              out which items are top-rated.
            </p>
          </div>
        )}
      </div>
      <div className={styles.aboutGallery}>
        <Image
          priority
          src="/about/primary.svg"
          alt="Product Sofa Image "
          width={605}
          height={348}
          className={styles.aboutGalleryImage}
        />
        <Image
          priority
          src="/about/secondary.svg"
          alt="Product Sofa Image "
          width={605}
          height={348}
          className={styles.aboutGalleryImage}
        />
      </div>
    </div>
  );
};
