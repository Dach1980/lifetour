import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

function toursSlider() {
  return new Swiper('.tours__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    navigation: {
      nextEl: '.tours__swiper-button--next',
      prevEl: '.tours__swiper-button--prev',
      disabledClass: 'primary-slider-button--disabled',
    },
    breakpoints: {
      [MOBILE_WIDTH]: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      [TABLET_WIDTH]: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      [DESKTOP_WIDTH]: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
}

export { toursSlider };
