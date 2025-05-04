import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

function advsSlider() {
  return new Swiper('.adv__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.adv__button--next',
      prevEl: '.adv__button--prev',
      disabledClass: 'primary-slider-button--disabled',
    },
    breakpoints: {
      [MOBILE_WIDTH]: {
        enabled: false,
        slidesPerView: null,
      },
      [TABLET_WIDTH]: {
        enabled: false,
        slidesPerView: null,
      },
      [DESKTOP_WIDTH]: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        initialSlide: 1,
        slidesPerGroup: 2,
        slidesPerGroupSkip: 1,
        loopAddBlankSlides: false,
        allowTouchMove: false,
      },
    },
    on: {
      init: function enableOnlyMobile(swiper) {
        if (DESKTOP_WIDTH > window.innerWidth) {
          swiper.disable();
          swiper.el.classList.add('adv__swiper--non-slider');
        } else {
          swiper.enable();
          swiper.el.classList.remove('adv__swiper--non-slider');
        }
      },
    },
  });
}

export { advsSlider };
