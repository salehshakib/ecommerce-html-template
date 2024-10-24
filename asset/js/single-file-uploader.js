// Favicon upload
const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");
const placeholder = document.getElementById("placeholder");
const uploadText = document.getElementById("uploadText");
const uploadIcon = document.getElementById("uploadIcon");
const imageContainer = document.getElementById("imageContainer");
const preview = document.getElementById("preview");
const previewButton = document.getElementById("previewButton");
const deleteButton = document.getElementById("deleteButton");

// Logo upload
const uploadBoxLogo = document.getElementById("uploadBoxLogo");
const fileInputLogo = document.getElementById("fileInputLogo");
const placeholderLogo = document.getElementById("placeholderLogo");
const imageContainerLogo = document.getElementById("imageContainerLogo");
const previewLogo = document.getElementById("previewLogo");
const previewButtonLogo = document.getElementById("previewButtonLogo");
const deleteButtonLogo = document.getElementById("deleteButtonLogo");

// Full preview handlers
const fullPreview = document.getElementById("fullPreview");
const fullPreviewImage = document.getElementById("fullPreviewImage");
const closePreview = document.getElementById("closePreview");

const fullPreviewLogo = document.getElementById("fullPreviewLogo");
const fullPreviewImageLogo = document.getElementById("fullPreviewImageLogo");
const closePreviewLogo = document.getElementById("closePreviewLogo");

// Generalized function for handling image uploads
function handleFileUpload(
  inputElement,
  previewElement,
  placeholderElement,
  imageContainerElement,
  uploadBoxElement
) {
  const file = inputElement.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewElement.src = e.target.result;
      placeholderElement.classList.add("hidden");
      imageContainerElement.classList.remove("hidden");
      uploadBoxElement.setAttribute("aria-label", "Image uploaded");
    };
    reader.readAsDataURL(file);
  }
}

// Generalized delete image function
function deleteImage(
  inputElement,
  previewElement,
  placeholderElement,
  imageContainerElement,
  uploadBoxElement
) {
  inputElement.value = "";
  previewElement.src = "";
  placeholderElement.classList.remove("hidden");
  imageContainerElement.classList.add("hidden");
  uploadBoxElement.setAttribute("aria-label", "Upload image");
}

// Event listeners for favicon
uploadBox.addEventListener("click", (e) => {
  if ([uploadBox, placeholder, uploadText, uploadIcon].includes(e.target)) {
    fileInput.click();
  }
});
uploadBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fileInput.click();
  }
});
fileInput.addEventListener("change", () =>
  handleFileUpload(fileInput, preview, placeholder, imageContainer, uploadBox)
);
deleteButton.addEventListener("click", (e) => {
  e.stopPropagation();
  deleteImage(fileInput, preview, placeholder, imageContainer, uploadBox);
});

// Event listeners for logo
uploadBoxLogo.addEventListener("click", (e) => {
  if ([uploadBoxLogo, placeholderLogo].includes(e.target)) {
    fileInputLogo.click();
  }
});
uploadBoxLogo.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fileInputLogo.click();
  }
});
fileInputLogo.addEventListener("change", () =>
  handleFileUpload(
    fileInputLogo,
    previewLogo,
    placeholderLogo,
    imageContainerLogo,
    uploadBoxLogo
  )
);
deleteButtonLogo.addEventListener("click", (e) => {
  e.stopPropagation();
  deleteImage(
    fileInputLogo,
    previewLogo,
    placeholderLogo,
    imageContainerLogo,
    uploadBoxLogo
  );
});

// Generalized function to show full preview
function showFullPreview(
  previewElement,
  fullPreviewElement,
  fullPreviewImageElement,
  closePreviewElement
) {
  fullPreviewImageElement.src = previewElement.src;
  fullPreviewElement.classList.remove("hidden");
  fullPreviewElement.classList.add("fixed", "inset-5", "z-50");
  fullPreviewImageElement.classList.remove("hidden");
  closePreviewElement.classList.remove("hidden");
}

// Generalized function to hide full preview
function hideFullPreview(
  fullPreviewElement,
  fullPreviewImageElement,
  closePreviewElement
) {
  fullPreviewElement.classList.add("hidden");
  fullPreviewElement.classList.remove("fixed", "inset-5", "z-50");
  fullPreviewImageElement.classList.add("hidden");
  closePreviewElement.classList.add("hidden");
}

// Full preview event listeners for favicon
previewButton.addEventListener("click", () =>
  showFullPreview(preview, fullPreview, fullPreviewImage, closePreview)
);
closePreview.addEventListener("click", () =>
  hideFullPreview(fullPreview, fullPreviewImage, closePreview)
);

// Full preview event listeners for logo
previewButtonLogo.addEventListener("click", () =>
  showFullPreview(
    previewLogo,
    fullPreviewLogo,
    fullPreviewImageLogo,
    closePreviewLogo
  )
);
closePreviewLogo.addEventListener("click", () =>
  hideFullPreview(fullPreviewLogo, fullPreviewImageLogo, closePreviewLogo)
);

//maintenance mode
// New upload section handlers
const uploadBoxNew = document.getElementById("uploadBoxNew");
const fileInputNew = document.getElementById("fileInputNew");
const placeholderNew = document.getElementById("placeholderNew");
const imageContainerNew = document.getElementById("imageContainerNew");
const previewNew = document.getElementById("previewNew");
const previewButtonNew = document.getElementById("previewButtonNew");
const deleteButtonNew = document.getElementById("deleteButtonNew");

const fullPreviewNew = document.getElementById("fullPreviewNew");
const fullPreviewImageNew = document.getElementById("fullPreviewImageNew");
const closePreviewNew = document.getElementById("closePreviewNew");

// Generalized function for handling image uploads
function handleFileUpload(
  inputElement,
  previewElement,
  placeholderElement,
  imageContainerElement,
  uploadBoxElement
) {
  const file = inputElement.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewElement.src = e.target.result;
      placeholderElement.classList.add("hidden");
      imageContainerElement.classList.remove("hidden");
      uploadBoxElement.setAttribute("aria-label", "Image uploaded");
    };
    reader.readAsDataURL(file);
  }
}

// Generalized delete image function
function deleteImage(
  inputElement,
  previewElement,
  placeholderElement,
  imageContainerElement,
  uploadBoxElement
) {
  inputElement.value = "";
  previewElement.src = "";
  placeholderElement.classList.remove("hidden");
  imageContainerElement.classList.add("hidden");
  uploadBoxElement.setAttribute("aria-label", "Upload image");
}

// Event listeners for new upload box
uploadBoxNew.addEventListener("click", (e) => {
  if ([uploadBoxNew, placeholderNew].includes(e.target)) {
    fileInputNew.click();
  }
});

uploadBoxNew.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fileInputNew.click();
  }
});

fileInputNew.addEventListener("change", () =>
  handleFileUpload(
    fileInputNew,
    previewNew,
    placeholderNew,
    imageContainerNew,
    uploadBoxNew
  )
);
deleteButtonNew.addEventListener("click", (e) => {
  e.stopPropagation();
  deleteImage(
    fileInputNew,
    previewNew,
    placeholderNew,
    imageContainerNew,
    uploadBoxNew
  );
});

// Generalized function to show full preview
function showFullPreview(
  previewElement,
  fullPreviewElement,
  fullPreviewImageElement,
  closePreviewElement
) {
  fullPreviewImageElement.src = previewElement.src;
  fullPreviewElement.classList.remove("hidden");
  fullPreviewElement.classList.add("fixed", "inset-5", "z-50");
  fullPreviewImageElement.classList.remove("hidden");
  closePreviewElement.classList.remove("hidden");
}

// Generalized function to hide full preview
function hideFullPreview(
  fullPreviewElement,
  fullPreviewImageElement,
  closePreviewElement
) {
  fullPreviewElement.classList.add("hidden");
  fullPreviewElement.classList.remove("fixed", "inset-5", "z-50");
  fullPreviewImageElement.classList.add("hidden");
  closePreviewElement.classList.add("hidden");
}

// Full preview event listeners for new upload box
previewButtonNew.addEventListener("click", () =>
  showFullPreview(
    previewNew,
    fullPreviewNew,
    fullPreviewImageNew,
    closePreviewNew
  )
);
closePreviewNew.addEventListener("click", () =>
  hideFullPreview(fullPreviewNew, fullPreviewImageNew, closePreviewNew)
);

// SEO Image upload section handlers
const uploadBoxSEO = document.getElementById("uploadBoxSEO");
const fileInputSEO = document.getElementById("fileInputSEO");
const placeholderSEO = document.getElementById("placeholderSEO");
const imageContainerSEO = document.getElementById("imageContainerSEO");
const previewSEO = document.getElementById("previewSEO");
const previewButtonSEO = document.getElementById("previewButtonSEO");
const deleteButtonSEO = document.getElementById("deleteButtonSEO");

const fullPreviewSEO = document.getElementById("fullPreviewSEO");
const fullPreviewImageSEO = document.getElementById("fullPreviewImageSEO");
const closePreviewSEO = document.getElementById("closePreviewSEO");

// Handling image upload for SEO image
fileInputSEO.addEventListener("change", () =>
  handleFileUpload(
    fileInputSEO,
    previewSEO,
    placeholderSEO,
    imageContainerSEO,
    uploadBoxSEO
  )
);
deleteButtonSEO.addEventListener("click", (e) => {
  e.stopPropagation();
  deleteImage(
    fileInputSEO,
    previewSEO,
    placeholderSEO,
    imageContainerSEO,
    uploadBoxSEO
  );
});

// Show and close full preview for SEO image
previewButtonSEO.addEventListener("click", () =>
  showFullPreview(
    previewSEO,
    fullPreviewSEO,
    fullPreviewImageSEO,
    closePreviewSEO
  )
);
closePreviewSEO.addEventListener("click", () =>
  hideFullPreview(fullPreviewSEO, fullPreviewImageSEO, closePreviewSEO)
);
