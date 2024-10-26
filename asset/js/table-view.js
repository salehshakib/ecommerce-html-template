// Function to get selected checkboxes
function getSelectedCheckboxes() {
  const checkboxes = document.querySelectorAll(".table-checkbox"); // Selects checkboxes by class
  const selectedCheckboxes = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCheckboxes.push({
        id: checkbox.id,
        label: document.querySelector(`label[for="${checkbox.id}"]`).innerText,
      });
    }
  });

  console.log(selectedCheckboxes);
  return selectedCheckboxes;
}

// Function to add onchange event listeners
function setupCheckboxListeners() {
  const checkboxes = document.querySelectorAll(".table-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", getSelectedCheckboxes);
  });
}

// Call setup function on page load
setupCheckboxListeners();
