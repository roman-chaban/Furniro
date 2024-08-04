export interface SwiperSlideImage {
  slideImage: string;
}

type SwiperImages = SwiperSlideImage[];

export const swiperSlides: SwiperImages = [
  { slideImage: '/images/rooms/swiperImages/primarySlide.svg' },
  { slideImage: '/images/rooms/swiperImages/secondarySlide.svg' },
  { slideImage: '/images/rooms/swiperImages/tertiarySlide.svg' },
];
