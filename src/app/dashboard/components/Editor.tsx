"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from "@uiw/react-md-editor";
import dynamic from "next/dynamic";
import { SetStateAction, useState } from "react";
// import * as commands from "@uiw/react-md-editor/commands"
// const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const Editor = () => {
  const [value, setValue] = useState("**Hello world!!!**");

  return <>{/* <MDEditor value={value} onChange={setValue} /> */}</>;
};

export default Editor;
