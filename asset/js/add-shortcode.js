document.addEventListener("DOMContentLoaded", function () {
  const shortcodeContainer = document.getElementById("shortcodeContainer");
  const addShortcodeButton = document.getElementById("addShortcode");

  addShortcodeButton.addEventListener("click", function () {
    const newShortcode = document.createElement("div");
    newShortcode.className = "flex space-x-2 mt-2";
    newShortcode.innerHTML = `
  <input
    type="text"
    placeholder="Object name"
    class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
  <input
    type="text"
    placeholder="Key"
    class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
  <button type="button" class="remove-shortcode text-red-500 font-bold rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  </button>
`;
    shortcodeContainer.appendChild(newShortcode);
  });

  shortcodeContainer.addEventListener("click", function (event) {
    const removeButton = event.target.closest(".remove-shortcode"); // Use closest to target the button
    if (removeButton) {
      removeButton.closest(".flex").remove(); // Removes the parent div with class "flex"
    }
  });
});
