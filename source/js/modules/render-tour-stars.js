const toursContainerEl = document.querySelector('.tours__swiper-wrapper');
const toursDifficultElList = toursContainerEl.querySelectorAll('.tour-slide__requirement--difficulty');

const renderStars = () => {
  toursDifficultElList.forEach((el) => {
    el.style.setProperty('--count-star', `${el.dataset.raiting}`);
  });
};

export { renderStars };
