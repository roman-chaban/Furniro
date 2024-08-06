import type { FC } from 'react';
import styles from './FurnituroGallery.module.scss';
import { GalleryImages } from '@/constants/furnitureGalleryImages';
import Image from 'next/image';

export const galleryImages: GalleryImages = [
  {
    primary: [
      '/images/furnitureGallery/primary.svg',
      '/images/furnitureGallery/secondary.svg',
      '/images/furnitureGallery/tertiary.svg',
      '/images/furnitureGallery/fourth.svg',
      '/images/furnitureGallery/five.svg',
      '/images/furnitureGallery/six.svg',
      '/images/furnitureGallery/seven.svg',
      '/images/furnitureGallery/eight.svg',
      '/images/furnitureGallery/nine.svg',
    ],
  },
];
export const FurnituroGallery: FC = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryTitlesInfo}>
          <p className={styles.gallerySubTitle}>Share your setup with</p>
          <h2 className={styles.galleryTitle}>#FurniroFurniture</h2>
          <div className={styles.gridGallery}>
            <div className={styles.primaryGallery}>
              <div className={styles.primaryBlock}>
                <div className={styles.firstBlock}>
                  <Image
                    className={styles.galleryImage}
                    src={galleryImages[0].primary[0]}
                    alt=""
                    width={100}
                    height={382}
                  />
                  <Image
                    className={styles.galleryImage}
                    src={galleryImages[0].primary[1]}
                    alt=""
                    width={452}
                    height={312}
                  />
                </div>
                <div className={styles.secondBlock}>
                  <Image
                    className={styles.galleryImage}
                    src={galleryImages[0].primary[2]}
                    alt=""
                    width={207.5}
                    height={323}
                  />
                  <Image
                    className={styles.galleryImage}
                    src={galleryImages[0].primary[3]}
                    alt=""
                    width={344}
                    height={242}
                  />
                </div>
              </div>
              <div className={styles.centerBlock}>
                <Image
                  className={styles.galleryImage}
                  src={galleryImages[0].primary[4]}
                  alt=""
                  width={295}
                  height={392}
                />
              </div>
              <div className={styles.thirdBlock}>
                <div className={styles.thirdPrimary}>
                  <Image
                    className={styles.galleryImage}
                    src={galleryImages[0].primary[5]}
                    alt=""
                    width={290}
                    height={348}
                  />
                  <Image
                    className={styles.galleryImage}
                    src={galleryImages[0].primary[8]}
                    alt=""
                    width={250}
                    height={433}
                  />
                </div>
                <div className={styles.thirdSecondary}>
                  <Image
                    className={styles.galleryImage}
                    src={galleryImages[0].primary[6]}
                    alt=""
                    width={178}
                    height={242}
                  />
                  <Image
                    className={styles.galleryImage}
                    src={galleryImages[0].primary[7]}
                    alt=""
                    width={258}
                    height={196}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
