const resetButton = document.getElementById("filter-reset");
const cancelButton = document.getElementById("filter-cancel");
const searchButton = document.getElementById("filter-search");

const filterDropdown = document.getElementById("advanceSearchDropdown");
const filterDropdownButton = document.getElementById(
  "advanceSearchFilterButton"
);
const dropdownInstance = new Dropdown(filterDropdown, filterDropdownButton);

// Function to reset form fields
const resetFields = () => {
  const inputFields = document.querySelectorAll("#advance-saerch-form input"); // Selects inputs within the form
  inputFields.forEach((input) => {
    input.value = ""; // Reset each input field to an empty string
  });
};

// Event listener for reset button
resetButton.addEventListener("click", () => {
  console.log("Reset button clicked!");
  resetFields(); // Reset the fields
});

// Event listener for cancel button
cancelButton.addEventListener("click", () => {
  console.log("Cancel button clicked!");
  dropdownInstance.hide(); // Hide the dropdown
});

// Event listener for search button
searchButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const searchValues = Array.from(
    document.querySelectorAll("#advance-saerch-form input")
  )
    .map((input) => input.value) // Get values of all input fields
    .filter((value) => value); // Filter out empty values
  console.log("Search values:", searchValues); // Log the values
});
