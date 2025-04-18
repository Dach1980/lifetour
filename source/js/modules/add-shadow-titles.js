const titleEls = document.querySelectorAll('h2.primary-title');

const addDataText = (titleEl) => {
  if (!titleEl) {
    return;
  }
  titleEl.dataset.text = titleEl.textContent;;
};

const renderShadowTitle = () => {
  titleEls.forEach(addDataText);
};

export { renderShadowTitle };

/*
const titleElsCollection = document.querySelectorAll('.primary-title');
const unclassSectionEl = document.querySelector('.about');
const unclassTitleEl = unclassSectionEl.querySelector('h2');

const addDataText = (titleEl) => {
  // if (!titleEl) {
  //   console.warn('Element not found');
  //   return;
  // }
  titleEl.dataset.text = titleEl.textContent;
  // console.log('Added data-text:', titleEl.dataset.text);
};

const renderShadowTitle = () => {
  titleElsCollection.forEach((title) => addDataText(title));
  addDataText(unclassTitleEl);
};

export { renderShadowTitle };
*/
