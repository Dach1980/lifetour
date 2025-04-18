import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

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
      320: {
        enabled: false,
        slidesPerView: null,
      },
      768: {
        enabled: false,
        slidesPerView: null,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        initialSlide: 1,
        slidesPerGroup: 2,
        // slidesPerGroupSkip: 1,
        loopAddBlankSlides: false,
        allowTouchMove: false,
      },
    },
    on: {
      init: function enableOnlyMobile(swiper) {
        if (1440 > window.innerWidth) {
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
