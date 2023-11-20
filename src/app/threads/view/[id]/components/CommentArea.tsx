import Editor from "@/app/dashboard/components/Editor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CommentArea = () => {
  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid w-full gap-1.5">
          <Label>Your comment</Label>
          {/* <Textarea placeholder="What are your thoughts?" id="message" /> */}
        </div>
        <Editor />
      </CardContent>
      <CardFooter className="flex flex-col gap-6">
        <Button className="self-stretch md:self-start">Comment</Button>
      </CardFooter>
    </Card>
  );
};

export default CommentArea;
