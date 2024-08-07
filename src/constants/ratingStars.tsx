
export const fullStar = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z"
      fill="#FFC700"
    />
  </svg>
);
export const halfStar = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z"
      fill="#FFC700"
    />
  </svg>
);

export const generateRatingStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return [
    ...Array(fullStars).fill(fullStar),
    ...(hasHalfStar ? [halfStar] : []),
    ...Array(5 - fullStars - (hasHalfStar ? 1 : 0)).fill(null),
  ];
};
