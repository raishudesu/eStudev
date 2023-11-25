import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";

const CommentArea = () => {
  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid w-full gap-1.5">
          <Label>Your comment</Label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists wordcount autoresize",
              toolbar:
                "undo redo | blocks fontsize | bold italic underline strikethrough codesample | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              codesample_languages: [
                { text: "HTML/XML", value: "markup" },
                { text: "JavaScript", value: "javascript" },
                { text: "CSS", value: "css" },
                { text: "PHP", value: "php" },
                { text: "Ruby", value: "ruby" },
                { text: "Python", value: "python" },
                { text: "Java", value: "java" },
                { text: "C", value: "c" },
                { text: "C#", value: "csharp" },
                { text: "C++", value: "cpp" },
              ],

              menubar: false,
            }}

            // value={getValues("content")}
            // onEditorChange={handleTextChange}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-6">
        <Button className="self-stretch md:self-start">Comment</Button>
      </CardFooter>
    </Card>
  );
};

export default CommentArea;
