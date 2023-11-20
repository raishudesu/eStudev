import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ThreadForm from "./ThreadForm";

const CreateThread = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Create thread
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-start">
        <ThreadForm />
      </CardContent>
      <CardFooter className="flex gap-6"></CardFooter>
    </Card>
  );
};

export default CreateThread;
