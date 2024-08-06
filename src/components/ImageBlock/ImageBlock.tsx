import type { FC } from 'react';
import Image from 'next/image';
import styles from '@/components/FurnituroGallery/FurnituroGallery.module.scss';

interface ImageBlockProps {
  images: string[];
  className: string;
}

export const ImageBlock: FC<ImageBlockProps> = ({ images, className }) => {
  return (
    <div className={className}>
      {images.map((src, index) => (
        <Image
          key={index}
          className={styles.galleryImage}
          src={src}
          alt={`Gallery image ${index}`}
          width={getImageWidth(index)}
          height={getImageHeight(index)}
        />
      ))}
    </div>
  );
};

const getImageWidth = (index: number): number => {
  const widths = [100, 452, 207.5, 344, 295, 290, 178, 258, 250];
  return widths[index] || 100;
};

const getImageHeight = (index: number): number => {
  const heights = [382, 312, 323, 242, 392, 348, 242, 196, 433];
  return heights[index] || 100;
};
