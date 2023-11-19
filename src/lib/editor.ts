import { Quill } from "react-quill";

// export const formats = [
//   "align",
//   "background",
//   "blockquote",
//   "bold",
//   "code-block",
//   "color",
//   "float",
//   "font",
//   "header",
//   "height",
//   "image",
//   "italic",
//   "link",
//   "script",
//   "strike",
//   "size",
//   "underline",
//   "width",
// ];

// export const modules = {
//   imageActions: {},
//   imageFormats: {},

//   toolbar: [
//     [{ header: [1, 2, false] }],
//     ["bold", "italic", "underline"],
//     ["image", "code-block"],
//   ],
// };

export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "code-block",
  "align",
  "formula",
];

export const modules = {
  //   imageActions: {},
  imageFormats: {},

  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["link", "image", "code-block"],

    ["clean"], // remove formatting button
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  //   imageResize: {
  //     parchment: Quill.import("parchment"),
  //     modules: ["Resize", "DisplaySize"],
  //   },
};
