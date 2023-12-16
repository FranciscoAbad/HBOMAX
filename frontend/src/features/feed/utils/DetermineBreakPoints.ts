export const determineBreakPoints = (
  big: boolean,
  banner: boolean,
  hasSide: boolean
) => {
  if (banner) {
    return {
      596: {
        slidesPerView: 3.12,
        slidesPerGroup: 3,
        spaceBetween: 0,
      },
      1096: {
        slidesPerView: 4.12,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      1800: {
        slidesPerView: 6.12,
        slidesPerGroup: 6,
        spaceBetween: 0,
      },
    };
  } else if (big) {
    return {
      596: {
        slidesPerView: 3.12,
        slidesPerGroup: 3,
        spaceBetween: 0,
      },
      1096: {
        slidesPerView: 4.12,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      1800: {
        slidesPerView: 5.12,
        slidesPerGroup: 5,
        spaceBetween: 0,
      },
    };
  } else if (hasSide === false) {
    return {
      596: {
        slidesPerView: 4.12,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      1096: {
        slidesPerView: 6.12,
        slidesPerGroup: 6,
        spaceBetween: 0,
      },
      1800: {
        slidesPerView: 8.12,
        slidesPerGroup: 8,
        spaceBetween: 0,
      },
    };
  } else {
    return {
      596: {
        slidesPerView: 6.12,
        slidesPerGroup: 6,
        spaceBetween: 0,
      },
      1096: {
        slidesPerView: 6.12,
        slidesPerGroup: 6,
        spaceBetween: 0,
      },
      1800: {
        slidesPerView: 8.12,
        slidesPerGroup: 8,
        spaceBetween: 0,
      },
    };
  }
};
