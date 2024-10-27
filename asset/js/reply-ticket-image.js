// // const imageButton = document.getElementById("image-button");
// // const fileInput = document.getElementById("file-input");
// // const imagePreview = document.getElementById("image-preview");
// // const textInput = document.querySelector('input[type="text"]');
// // const sendButton = document.querySelector('button[aria-label="Send message"]');

// // imageButton.addEventListener("click", () => {
// //   fileInput.click();
// // });

// // fileInput.addEventListener("change", (event) => {
// //   const files = event.target.files;
// //   for (let i = 0; i < files.length; i++) {
// //     const file = files[i];
// //     const reader = new FileReader();

// //     reader.onload = (e) => {
// //       addImagePreview(e.target.result);
// //     };

// //     reader.readAsDataURL(file);
// //   }
// //   // Reset file input to allow selecting the same files again
// //   fileInput.value = "";
// // });

// // function addImagePreview(src) {
// //   const img = document.createElement("div");
// //   img.className = "relative";
// //   img.innerHTML = `
// //                 <img src="${src}" alt="Uploaded image" class="w-20 h-20 object-contain rounded-md">
// //                 <button class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1" aria-label="Delete image">
// //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
// //                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
// //                     </svg>
// //                 </button>
// //             `;
// //   imagePreview.appendChild(img);

// //   img.querySelector("button").addEventListener("click", () => {
// //     img.remove();
// //   });
// // }

// // textInput.addEventListener("keypress", function (e) {
// //   if (e.key === "Enter") {
// //     sendMessage();
// //   }
// // });

// // sendButton.addEventListener("click", sendMessage);

// // function sendMessage() {
// //   const message = textInput.value;
// //   const images = Array.from(imagePreview.querySelectorAll("img")).map(
// //     (img) => img.src
// //   );
// //   console.log("Message:", message);
// //   console.log("Images:", images);

// //   // Clear input and images after sending
// //   textInput.value = "";
// //   imagePreview.innerHTML = "";
// // }

// const imageButton = document.getElementById("image-button");
// const fileInput = document.getElementById("file-input");
// const imagePreview = document.getElementById("image-preview");
// const textInput = document.querySelector('input[type="text"]');
// const sendButton = document.querySelector('button[aria-label="Send message"]');

// imageButton.addEventListener("click", () => {
//   fileInput.click();
// });

// fileInput.addEventListener("change", (event) => {
//   const files = event.target.files;
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       addImagePreview(e.target.result);
//     };

//     reader.readAsDataURL(file);
//   }
//   fileInput.value = "";
// });

// function addImagePreview(src) {
//   const img = document.createElement("div");
//   img.className = "relative group";
//   img.innerHTML = `
//         <img src="${src}" alt="Uploaded image" class="w-20 h-20 object-cover rounded-md">
//         <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md">
//             <button class="text-white p-1 hover:text-blue-400 transition-colors duration-200" aria-label="Preview image">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//             </button>
//             <button class="text-white p-1 hover:text-red-400 transition-colors duration-200" aria-label="Delete image">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                 </svg>
//             </button>
//         </div>
//     `;
//   imagePreview.appendChild(img);

//   const previewButton = img.querySelector('button[aria-label="Preview image"]');
//   const deleteButton = img.querySelector('button[aria-label="Delete image"]');

//   previewButton.addEventListener("click", () => {
//     // Open image in a new tab for preview
//     window.open(src, "_blank");
//   });

//   deleteButton.addEventListener("click", () => {
//     img.remove();
//   });
// }

// textInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     sendMessage();
//   }
// });

// sendButton.addEventListener("click", sendMessage);

// function sendMessage() {
//   const message = textInput.value;
//   const images = Array.from(imagePreview.querySelectorAll("img")).map(
//     (img) => img.src
//   );
//   console.log("Message:", message);
//   console.log("Images:", images);

//   textInput.value = "";
//   imagePreview.innerHTML = "";
// }

const imageButton = document.getElementById("image-button");
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");
const textInput = document.querySelector('input[type="text"]');
const sendButton = document.querySelector('button[aria-label="Send message"]');
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

imageButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = (e) => {
      addImagePreview(e.target.result);
    };

    reader.readAsDataURL(file);
  }
  fileInput.value = "";
});

function addImagePreview(src) {
  const img = document.createElement("div");
  img.className = "relative group";
  img.innerHTML = `
                <img src="${src}" alt="Uploaded image" class="w-20 h-20 object-contain rounded-md">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md">
                    <button class="text-white p-1 hover:text-blue-400 transition-colors duration-200" aria-label="Preview image" type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <button class="text-white p-1 hover:text-red-400 transition-colors duration-200" aria-label="Delete image" type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            `;
  imagePreview.appendChild(img);

  const previewButton = img.querySelector('button[aria-label="Preview image"]');
  const deleteButton = img.querySelector('button[aria-label="Delete image"]');

  previewButton.addEventListener("click", () => {
    modalImage.src = src;
    imageModal.classList.remove("hidden");
  });

  deleteButton.addEventListener("click", () => {
    img.remove();
  });
}

closeModal.addEventListener("click", () => {
  imageModal.classList.add("hidden");
});

textInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const message = textInput.value;
  const images = Array.from(imagePreview.querySelectorAll("img")).map(
    (img) => img.src
  );
  console.log("Message:", message);
  console.log("Images:", images);

  textInput.value = "";
  imagePreview.innerHTML = "";
}
