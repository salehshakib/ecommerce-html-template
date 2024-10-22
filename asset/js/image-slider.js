const previewButtons = document.querySelectorAll(".previewButton");
const previewModal = document.getElementById("previewModal");
const closeButton = document.getElementById("closeButton");
const imageSlider = document.getElementById("imageSlider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
const totalImages = imageSlider.children.length;

function updateSliderPosition() {
  imageSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Add click event listener to each preview button
previewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    previewModal.classList.remove("hidden");
    currentIndex = parseInt(button.getAttribute("data-index")); // Set index based on clicked button
    updateSliderPosition();
  });
});

// Close modal when close button is clicked
closeButton.addEventListener("click", () => {
  previewModal.classList.add("hidden");
});

// Handle previous button click
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSliderPosition();
});

// Handle next button click
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSliderPosition();
});

// Close modal by clicking outside modal content
previewModal.addEventListener("click", (event) => {
  if (event.target === previewModal) {
    previewModal.classList.add("hidden");
  }
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (!previewModal.classList.contains("hidden")) {
    if (event.key === "ArrowLeft") {
      prevButton.click();
    } else if (event.key === "ArrowRight") {
      nextButton.click();
    } else if (event.key === "Escape") {
      closeButton.click();
    }
  }
});
