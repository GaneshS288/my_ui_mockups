let imageIndex = 0;
const imageContainers = Array.from(
  document.querySelectorAll(".carousel-frame > div"),
);
const sliderDots = Array.from(document.querySelectorAll(".slider-dot"));
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

function displayImage() {
  imageContainers.forEach((ele) => ele.classList.remove("active"));
  imageContainers[imageIndex].classList.add("active");

  sliderDots.forEach((ele) => ele.classList.remove("dot-active"));
  sliderDots[imageIndex].classList.add("dot-active");
}

function nextImage() {
  imageIndex < imageContainers.length - 1 ? ++imageIndex : (imageIndex = 0);
  displayImage();
}

function previousImage() {
  imageIndex > 0 ? --imageIndex : (imageIndex = imageContainers.length - 1);
  displayImage();
}

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);
displayImage();
setInterval(nextImage, 5000);
