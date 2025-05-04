import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

function reviewsSlider() {
  return new Swiper('.reviews__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
      disabledClass: 'primary-slider-button--disabled',
    },
    breakpoints: {
      [MOBILE_WIDTH]: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      [TABLET_WIDTH]: {
        slidesPerView: 1.19,
        spaceBetween: 30,
      },
      [DESKTOP_WIDTH]: {
        slidesPerView: 1.61,
        spaceBetween: 120,
        allowTouchMove: false,
      },
    },
  });
}

export { reviewsSlider };
