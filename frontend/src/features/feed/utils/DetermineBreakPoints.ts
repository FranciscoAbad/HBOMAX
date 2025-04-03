export const determineBreakPoints = (
  big: boolean,
  banner: boolean,
  hasSide: boolean
) => {
  if (banner) {
    if (big) {
      return {
        0: {
          slidesPerView: 1.12,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        596: {
          slidesPerView: 1.12,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        1096: {
          slidesPerView: 2.12,
          slidesPerGroup: 2,
          spaceBetween: 0,
        },
        1800: {
          slidesPerView: 3.12,
          slidesPerGroup: 3,
          spaceBetween: 0,
        },
      };
    } else {
      return {
        0: {
          slidesPerView: 2.12,
          slidesPerGroup: 2,
          spaceBetween: 0,
        },
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
    }
  } else if (big) {
    return {
      0: {
        slidesPerView: 2.12,
        slidesPerGroup: 2,
        spaceBetween: 0,
      },
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
      0: {
        slidesPerView: 3.12,
        slidesPerGroup: 3,
        spaceBetween: 0,
      },
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
      0: {
        slidesPerView: 4.12,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      596: {
        slidesPerView: 5.12,
        slidesPerGroup: 5,
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
