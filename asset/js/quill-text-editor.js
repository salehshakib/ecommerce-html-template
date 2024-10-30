const toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image"],

  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const options = {
  //   debug: "info",
  modules: {
    toolbar: {
      container: toolbarOptions, // Selector for toolbar container
    },
  },
  placeholder: "Write an something",
  theme: "snow",
};

var articleEditor = new Quill("#article-editor", options);

articleEditor.on("text-change", function () {
  // const content = articleEditor.root.innerHTML;
  const content = articleEditor.getContents();
  document.getElementById("description").value = content;
});

function getContent() {
  const content = articleEditor.getContents();

  console.log(content);
}

var quill = new Quill("#sitemap-editor", {
  modules: {
    syntax: true,
    toolbar: ["code-block"], // Enables syntax highlighting
  },
  placeholder: "Write something",
  theme: "snow",
});
hljs.highlightAll();

quill.format("code-block", true);

// Set the initial format to code-block
