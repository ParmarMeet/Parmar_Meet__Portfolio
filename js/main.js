(() => {
  let currentSlideIndex = 0;

  function openSlider(index) {
    const modal = document.getElementById("imageSlider");
    modal.style.display = "block";
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
  }

  function closeSlider() {
    document.getElementById("imageSlider").style.display = "none";
  }

  function showSlide(index) {
    const slides = document.querySelectorAll(".slider-item");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
      currentSlideIndex = 0;
    }
    if (index < 0) {
      currentSlideIndex = totalSlides - 1;
    }

    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = "none";
    }

    slides[currentSlideIndex].style.display = "block";
  }

  function moveSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const arrowLink = document.querySelector(".arrow-link");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        arrowLink.style.display = "block";
      } else {
        arrowLink.style.display = "none";
      }
    });

    arrowLink.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  const player = new Plyr("#player", { captions: { active: true } });

  window.player = player;
})();
