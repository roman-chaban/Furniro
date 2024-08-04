'use client';

import React, { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Scrollbar,
} from 'swiper/modules';
import { swiperSlides, SwiperSlideImage } from '@/constants/swiperImages';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import './Swiper.scss';
import styles from './Swiper.module.scss';

export const RoomsSwiper: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, A11y, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        scrollbar={{ draggable: true }}
        navigation
        onSlideChange={handleSlideChange}
      >
        {swiperSlides.map((slide: SwiperSlideImage, index: number) => (
          <SwiperSlide key={slide.slideImage}>
            <Image
              src={slide.slideImage}
              alt={`Slide ${index + 1}`}
              width={300}
              height={480}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.slider__circles}>
        {swiperSlides.map((_, index: number) => (
          <button
            key={index}
            className={`${styles.slider__circle} ${
              activeIndex === index ? styles.active : ''
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
