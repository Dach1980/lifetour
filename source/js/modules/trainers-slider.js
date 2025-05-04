import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

function trainersSlider() {
  return new Swiper('.training__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
      disabledClass: 'primary-slider-button--disabled',
    },
    breakpoints: {
      [MOBILE_WIDTH]: {
        slidesPerView: 1,
        allowTouchMove: true,
        initialSlide: 2,
      },
      [TABLET_WIDTH]: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
      },
      [DESKTOP_WIDTH]: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false,
        initialSlide: 0,
      },
    },
  });
}

export { trainersSlider };
