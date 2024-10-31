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
    class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
  />
  <input
    type="text"
    placeholder="Key"
    class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
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

document.addEventListener("DOMContentLoaded", function () {
  const currencyContainer = document.getElementById("currencyContainer");
  const addCurrencyButton = document.getElementById("addCurrency");

  addCurrencyButton.addEventListener("click", function () {
    const newShortcode = document.createElement("div");
    newShortcode.className = "flex space-x-2 mt-2";
    newShortcode.innerHTML = `
    <div class='w-full'>
    <hr class='w-full my-4 border-black'>
  <div class="flex flex-col gap-2 w-full">
  <div
                      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
                    >
                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 "
                          for="articleTitle"
                          >Currency <span class="text-red-600">*</span></label
                        >
                        <input
                          type="text"
                          id="articleTitle"
                          name="articleTitle"
                          class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
                          placeholder="Enter the article title"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 "
                          for="articleTitle"
                          >Symbol <span class="text-red-600">*</span></label
                        >
                        <input
                          type="text"
                          id="articleTitle"
                          name="articleTitle"
                          class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
                          placeholder="Enter the article title"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 "
                          for="articleTitle"
                          >Minimum Amount
                          <span class="text-red-600">*</span></label
                        >
                        <input
                          type="text"
                          id="articleTitle"
                          name="articleTitle"
                          class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
                          placeholder="Enter the article title"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 "
                          for="articleTitle"
                          >Max Amount <span class="text-red-600">*</span></label
                        >
                        <input
                          type="text"
                          id="articleTitle"
                          name="articleTitle"
                          class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
                          placeholder="Enter the article title"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 "
                          for="articleTitle"
                          >Percent Charge
                          <span class="text-red-600">*</span></label
                        >
                        <input
                          type="text"
                          id="articleTitle"
                          name="articleTitle"
                          class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
                          placeholder="Enter the article title"
                          required
                        />
                      </div>
                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 "
                          for="articleTitle"
                          >Fixed Amount
                          <span class="text-red-600">*</span></label
                        >
                        <input
                          type="text"
                          id="articleTitle"
                          name="articleTitle"
                          class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
                          placeholder="Enter the article title"
                          required
                        />
                      </div>

                      <div>
                        <label
                          class="block mb-2 text-sm font-medium text-gray-900 "
                          for="articleTitle"
                          >Rate<span class="text-red-600">*</span></label
                        >
                        <input
                          type="text"
                          id="articleTitle"
                          name="articleTitle"
                          class="block w-full p-2 py-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500  "
                          placeholder="Enter the article title"
                          required
                        />
                      </div>

                      <div class="flex items-center h-6 w-full mt-7">
                        <div class="">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                            required
                          />
                        </div>
                        <div class="ml-3">
                          <label
                            for="remember"
                            class="text-gray-500 "
                            >Crypto</label
                          >
                        </div>
                      </div>
                    </div>
  <button type="button" class="remove-currency text-red-500 font-bold rounded-md hover:bg-red-600 hover:text-white py-1 w-full text-sm border border-red-500">
   - Remove Currency
  </button></div></div>
`;
    currencyContainer.appendChild(newShortcode);
  });

  currencyContainer.addEventListener("click", function (event) {
    const removeButton = event.target.closest(".remove-currency"); // Use closest to target the button
    if (removeButton) {
      removeButton.closest(".flex").remove(); // Removes the parent div with class "flex"
    }
  });
});
