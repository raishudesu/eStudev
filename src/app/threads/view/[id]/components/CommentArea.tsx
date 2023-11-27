import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import CommentForm from "./CommentForm";

const CommentArea = ({ threadId }: { threadId: number }) => {
  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid w-full gap-1.5">
          <CommentForm threadId={threadId} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentArea;
