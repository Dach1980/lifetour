const titleElsCollection = document.querySelectorAll('.primary-title');
const unclassSectionEl = document.querySelector('.about');
const unclassTitleEl = unclassSectionEl.querySelector('h2');

const addDataText = (titleEl) => {
  titleEl.dataset.text = titleEl.textContent;
};

const renderShadowTitle = () => {
  titleElsCollection.forEach((title) => addDataText(title));
  addDataText(unclassTitleEl);
};

export { renderShadowTitle };
