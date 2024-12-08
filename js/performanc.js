function moveSlide(direction, carouselId) {
  const carousel = document.getElementById(carouselId);
  const images = carousel.querySelector('.carousel-images');
  const totalImages = carousel.querySelectorAll('.carousel-images img').length;
  let currentIndex = parseInt(images.dataset.index || 0);

  // Mise à jour de l'index
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1; // Aller à la dernière image
  } else if (currentIndex >= totalImages) {
    currentIndex = 0; // Revenir à la première image
  }

  // Déplacer les images
  images.style.transform = `translateX(-${currentIndex * 100}%)`;
  images.dataset.index = currentIndex; // Sauvegarde de l'index actuel
}
