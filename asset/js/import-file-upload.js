const modal = document.getElementById("import-modal");
const fileInput = document.getElementById("dropzone-file");
const importButton = document.querySelector("[data-modal-hide='static-modal']");
const closeButton = document.querySelector("[data-modal-hide='static-modal']");

// File change listener
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
});

// Function to close modal
function closeModal() {
  modal.classList.add("hidden");
}

// Event listeners for import and close buttons
importButton.addEventListener("click", () => {
  closeModal(); // Closes modal after "Import" action
  // Additional actions like sending file data to the server can be added here
});

closeButton.addEventListener("click", closeModal);

function showFileName(input) {
  const fileInfoDiv = document.getElementById("file-info");
  fileInfoDiv.innerHTML = ""; // Clear previous file info if any

  if (input.files && input.files[0]) {
    const fileName = input.files[0].name;

    // Create a span to display file name
    const fileNameSpan = document.createElement("span");
    fileNameSpan.textContent = fileName;
    fileInfoDiv.appendChild(fileNameSpan);

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "✕";
    removeButton.className =
      "ml-2 text-red-500 hover:text-red-700 cursor-pointer";
    removeButton.onclick = () => {
      input.value = ""; // Clear the file input
      fileInfoDiv.innerHTML = ""; // Remove the file info display
    };
    fileInfoDiv.appendChild(removeButton);
  }
}
