const toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image"],

  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
];

const options = {
  modules: {
    toolbar: {
      container: toolbarOptions,
    },
  },
  placeholder: "Write an something",
  theme: "snow",
};

var articleEditor = new Quill("#article-editor", options);

articleEditor.on("text-change", function () {
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
    toolbar: ["code-block"],
  },
  placeholder: "Write something",
  theme: "snow",
});
hljs.highlightAll();

quill.format("code-block", true);
