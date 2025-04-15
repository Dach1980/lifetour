import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const promoSlider = new Swiper('.hero__swiper', {
  modules: [Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-bullet',
    bulletActiveClass: 'hero__pagination-bullet--is-active',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: true,
    },
    1440: {
      allowTouchMove: false,
    },
  },
});

export { promoSlider };
