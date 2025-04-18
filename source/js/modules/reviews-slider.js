import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

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
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 1.19,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 1.61,
        spaceBetween: 120,
        allowTouchMove: false,
      },
    },
  });
}

export { reviewsSlider };
