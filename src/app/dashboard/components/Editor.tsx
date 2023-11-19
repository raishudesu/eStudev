"use client";

import { ImageResize } from "quill-image-resize-module-ts";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "@/lib/editor";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { ImageFormats } from "@xeger/quill-image-formats";

const Editor = ({ ...field }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  //   Quill.register("modules/imageFormats", ImageFormats);
  //   Quill.register("modules/imageResize", ImageResize);
  return (
    <ReactQuill
      formats={formats}
      modules={modules}
      {...field}
      theme="snow"
      className="w-full break-all"
    />
  );
};

export default Editor;
