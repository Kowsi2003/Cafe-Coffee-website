let currentSlide = 0;
  const cardsWrapper = document.querySelector('.cards-wrapper');

  function showSlide() {
    const offset = -currentSlide * 25;
    cardsWrapper.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 4;
    showSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + 4) % 4;
    showSlide();
  }