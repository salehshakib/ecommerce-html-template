document.addEventListener("DOMContentLoaded", function () {
  const shortcodeContainer = document.getElementById("shortcodeContainer");
  const addShortcodeButton = document.getElementById("addShortcode");
  const shortcodeInput = document.querySelector("input[name='shortcode']");

  // Function to update shortcode input value
  function updateShortcode() {
    const objects = [];

    // Collect all object and key inputs within shortcodeContainer
    const objectInputs = shortcodeContainer.querySelectorAll(
      "input[name='object[]']"
    );
    const keyInputs = shortcodeContainer.querySelectorAll(
      "input[name='key[]']"
    );

    // Create objects from input values
    objectInputs.forEach((objectInput, index) => {
      const keyInput = keyInputs[index];
      if (objectInput.value && keyInput.value) {
        objects.push({
          object: objectInput.value,
          key: keyInput.value,
        });
      }
    });

    // Update hidden shortcode input with JSON string
    shortcodeInput.value = JSON.stringify(objects, null, 2);

    console.log(JSON.stringify(objects, null, 2));
  }

  // Add event listener for add shortcode button
  addShortcodeButton.addEventListener("click", function () {
    const newShortcode = document.createElement("div");
    newShortcode.className = "flex space-x-2 mt-2";
    newShortcode.innerHTML = `
      <input
        type="text"
        placeholder="Object name"
        name="object[]"
        class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Key"
        name="key[]"
        class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <button type="button" class="remove-shortcode text-red-500 font-bold rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    `;

    // Append new input set to container
    shortcodeContainer.appendChild(newShortcode);

    // Add input event listener to new inputs
    newShortcode.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", updateShortcode);
    });
  });

  // Initial event listeners for existing inputs
  shortcodeContainer.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", updateShortcode);
  });

  // Remove shortcode handler
  shortcodeContainer.addEventListener("click", function (event) {
    const removeButton = event.target.closest(".remove-shortcode");
    if (removeButton) {
      removeButton.closest(".flex").remove();
      updateShortcode(); // Update shortcode after removal
    }
  });
});
