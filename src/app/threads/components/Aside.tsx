import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Ranking from "./Ranking";
import SubFooter from "./SubFooter";

const Aside = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card className="w-full">
        <CardHeader className="flex flex-col">
          <CardTitle>Home</CardTitle>
          <CardDescription className="flex flex-col">
            Your personal ThinkSync homepage. Come here to collaborate with
            other students.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex gap-3">
            <Button>Create thread</Button>
            <Button variant={"secondary"}>Dashboard</Button>
          </div>
        </CardContent>
      </Card>
      <Ranking />
      <SubFooter />
    </div>
  );
};

export default Aside;
