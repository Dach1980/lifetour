import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { MOBILE_WIDTH, TABLET_WIDTH, DESKTOP_WIDTH } from './constants';

function promoSlider() {
  return new Swiper('.hero__swiper', {
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
      [MOBILE_WIDTH]: {
        allowTouchMove: true,
      },
      [TABLET_WIDTH]: {
        allowTouchMove: true,
      },
      [DESKTOP_WIDTH]: {
        allowTouchMove: false,
      },
    },
  });
}

export { promoSlider };
