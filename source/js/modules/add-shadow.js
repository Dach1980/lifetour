const titledElements = document.querySelectorAll('.primary-title');
const sectionAbout = document.querySelector('.about h2');

const setDataTextAttribute = (element) => {
  if (element) {
    element.dataset.text = element.textContent;
  }
};

const shadowTitle = () => {
  titledElements.forEach(setDataTextAttribute);
  setDataTextAttribute(sectionAbout);
};

export { shadowTitle };
