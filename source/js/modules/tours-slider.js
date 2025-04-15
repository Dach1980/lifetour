import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const toursSlider = new Swiper ('.tours__swiper', {
  modules: [ Navigation ],
  direction: 'horizontal',
  navigation: {
    nextEl: '.tours__swiper-button--next',
    prevEl: '.tours__swiper-button--prev',
    disabledClass: 'primary-slider-button--disabled',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
});

export { toursSlider };
