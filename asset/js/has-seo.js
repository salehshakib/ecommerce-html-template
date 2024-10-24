const seoCheckbox = document.getElementById("seo-checkbox");
const metaFieldsSection = document.getElementById("seo");
const articleForm = document.getElementById("articleForm");

const saveButton = document.getElementById("save");
// const saveAndCreateButton =
//   document.getElementById("saveAndCreate");
// const messageArea = document.getElementById("messageArea"); // Get the message area

// Function to toggle the visibility of meta fields
function toggleMetaFields() {
  if (seoCheckbox.checked) {
    metaFieldsSection.style.display = "grid";
  } else {
    metaFieldsSection.style.display = "none";
  }
}

// Event listener for checkbox changes
seoCheckbox.addEventListener("change", toggleMetaFields);
