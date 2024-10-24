const tableBody = document.querySelector("#kycTable tbody");
const addNewBtn = document.getElementById("addNew");
let dragSrcEl = null;

const initialData = [
  {
    name: "Email",
    label: "Email",
    type: "Email",
    width: "50%",
    required: true,
  },
  {
    name: "Full Name",
    label: "Name",
    type: "Text",
    width: "50%",
    required: true,
  },
  {
    name: "Gender",
    label: "Name",
    type: "Select",
    width: "50%",
    required: true,
  },
  {
    name: "NID Number",
    label: "Name",
    type: "Number",
    width: "50%",
    required: true,
  },
  {
    name: "NID Photo Front",
    label: "Name",
    type: "File",
    width: "50%",
    required: true,
  },
  {
    name: "NID Photo Back",
    label: "Name",
    type: "File",
    width: "50%",
    required: true,
  },
  {
    name: "You Hobby",
    label: "Name",
    type: "Checkbox",
    width: "100%",
    required: true,
  },
];

function createRow(data) {
  const row = document.createElement("tr");
  row.classList.add(
    "border-b",
    "last:border-b-0",
    "hover:bg-gray-50",
    "transition-colors"
  );
  row.draggable = true;
  row.innerHTML = `
        <td class="p-3 cursor-move">☰</td>
        <td class="p-3">${data.name}</td>
        <td class="p-3">${data.type}</td>
        <td class="p-3">${data.width}</td>
        <td class="p-3">
            <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                ${data.required ? "Required" : "Optional"}
            </span>
        </td>
        <td class="p-3">
            <button class="text-blue-600 hover:text-blue-800 mr-2"
            data-modal-target="static-modal"
                      data-modal-toggle="static-modal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
            </button>
            <button class="text-red-600 hover:text-red-800" data-modal-target="delete-modal"
                      data-modal-toggle="delete-modal">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
        </td>
    `;
  return row;
}

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", JSON.stringify(getRowData(this)));
  this.classList.add("bg-gray-200");
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = "move";
  return false;
}

function handleDragEnter() {
  this.classList.add("bg-blue-100");
}

function handleDragLeave() {
  this.classList.remove("bg-blue-100");
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl != this) {
    const srcData = JSON.parse(e.dataTransfer.getData("text/plain"));
    const destData = getRowData(this);
    updateRowData(dragSrcEl, destData);
    updateRowData(this, srcData);
  }
  return false;
}

function handleDragEnd() {
  this.classList.remove("bg-gray-200");
  tableBody.querySelectorAll("tr").forEach((row) => {
    row.classList.remove("bg-blue-100");
  });
}

function getRowData(row) {
  return {
    name: row.cells[1].textContent,
    type: row.cells[2].textContent,
    width: row.cells[3].textContent,
    required:
      row.cells[4].querySelector("span").textContent.trim() === "Required",
  };
}

function updateRowData(row, data) {
  row.cells[1].textContent = data.name;
  row.cells[2].textContent = data.type;
  row.cells[3].textContent = data.width;
  row.cells[4].querySelector("span").textContent = data.required
    ? "Required"
    : "Optional";
}

function addEventListeners(row) {
  row.addEventListener("dragstart", handleDragStart);
  row.addEventListener("dragover", handleDragOver);
  row.addEventListener("dragenter", handleDragEnter);
  row.addEventListener("dragleave", handleDragLeave);
  row.addEventListener("drop", handleDrop);
  row.addEventListener("dragend", handleDragEnd);
}

initialData.forEach((data) => {
  const row = createRow(data);
  addEventListeners(row);
  tableBody.appendChild(row);
});

addNewBtn.addEventListener("click", () => {
  const newData = {
    name: "New Field",
    label: "Name",
    type: "Text",
    width: "50%",
    required: true,
  };
  const newRow = createRow(newData);
  addEventListeners(newRow);
  tableBody.appendChild(newRow);
});
