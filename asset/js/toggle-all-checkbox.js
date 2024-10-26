function toggleAllRows(checkbox) {
  const isChecked = checkbox.checked;
  const rowCheckboxes = document.querySelectorAll(".row-checkbox");
  rowCheckboxes.forEach((cb) => {
    cb.checked = isChecked;
    toggleRowHighlight(cb); // Highlight or remove highlight based on the checkbox state
  });
}

function toggleRowHighlight(checkbox) {
  const row = checkbox.closest("tr");
  if (checkbox.checked) {
    row.classList.add("highlighted");
  } else {
    row.classList.remove("highlighted");
  }
}
