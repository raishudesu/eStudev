import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import EditThreadForm from "./EditThreadForm";

const EditThread = ({ id }: { id: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Edit thread
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-start">
        <EditThreadForm id={id} />
      </CardContent>
      <CardFooter className="flex gap-6"></CardFooter>
    </Card>
  );
};

export default EditThread;
