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
import CommentForm from "./CommentForm";

const CommentArea = ({
  threadId,
  authorName,
}: {
  threadId: number;
  authorName: string;
}) => {
  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid w-full gap-1.5">
          <CommentForm threadId={threadId} authorName={authorName} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentArea;
