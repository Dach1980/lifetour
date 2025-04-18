const getStarCount = () => {
  const tourElements = document.querySelectorAll('.tour-slide__requirement--difficulty');

  tourElements.forEach((star) => {
    const rating = parseFloat(star.dataset.raiting);

    if (!isNaN(rating) && rating >= 0 && rating <= 5) {
      star.style.setProperty('--count-star', rating);
    }
  });
};

export { getStarCount };
