import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";

const CommentArea = () => {
  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid w-full gap-1.5">
          <Label>Your comment</Label>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-6">
        <Button className="self-stretch md:self-start">Comment</Button>
      </CardFooter>
    </Card>
  );
};

export default CommentArea;
