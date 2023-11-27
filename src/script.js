document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    let currentSlide = 0;

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.children.length;
      updateSlidePosition();
    }

    function updateSlidePosition() {
      slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    }

    setInterval(nextSlide, 5000); // Avança automaticamente a cada 5 segundos
  });