import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const trainersSlider = new Swiper ('.training__swiper', {
  modules: [ Navigation ],
  direction: 'horizontal',
  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
    disabledClass: 'primary-slider-button--disabled',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowTouchMove: false,
      initialSlide: 0,
    },
  },
});

export { trainersSlider };
