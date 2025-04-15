const pageBodyEl = document.querySelector('.page-body');
const menuButtonEl = pageBodyEl.querySelector('.header__burger-button');
const menuEl = pageBodyEl.querySelector('.main-nav');
const overlayEl = pageBodyEl.querySelector('.overlay');
const openIconEl = menuButtonEl.querySelector('.burger__open-icon');
const closeIconEL = menuButtonEl.querySelector('.burger__close-icon');

const onBurgerClick = () => {
  menuEl.classList.toggle('main-nav--is-open');
  overlayEl.classList.toggle('overlay--is-open');
  openIconEl.classList.toggle('burger__open-icon--menu-open');
  closeIconEL.classList.toggle('burger__close-icon--menu-open');
  pageBodyEl.classList.toggle('page-body--menu-open');
};

const onMenuItemClick = (evt) => {
  const isMenuEl = evt.target.matches('.main-nav__link');
  if (isMenuEl) {
    onBurgerClick();
  }
};

const toggledMenu = () => {
  menuButtonEl.addEventListener('click', onBurgerClick);
  menuEl.addEventListener('click', onMenuItemClick);
};

export { toggledMenu };
