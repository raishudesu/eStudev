import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const HomeCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col">
        <CardTitle>Home</CardTitle>
        <CardDescription className="flex flex-col">
          Your personal ThinkSync homepage. Come here to collaborate with other
          students.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-3">
          <Button className="self-stretch md:self-start">Create thread</Button>
          <Button className="self-stretch md:self-start" variant={"secondary"}>
            Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
