import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

function gallerySlider() {
  return new Swiper('.gallery__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    breakpoints: {
      [MOBILE_WIDTH]: {
        slidesPerView: 2,
        spaceBetween: 5,
        allowTouchMove: true,
      },
      [TABLET_WIDTH]: {
        slidesPerView: 3,
        spaceBetween: 5,
        allowTouchMove: true,
      },
      [DESKTOP_WIDTH]: {
        slidesPerView: 5,
        spaceBetween: 5,
        allowTouchMove: false,
      },
    },
  });
}

export { gallerySlider };
