const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(
  (entreis) => {
    entreis.forEach((enrty) => {
      enrty.target.classList.toggle("show", enrty.isIntersecting); //remove and add class
    });
  },
  {
    threshold: 1,
  }
);

// loop through the cards
cards.forEach((card) => {
  observer.observe(card); //observe class
});
