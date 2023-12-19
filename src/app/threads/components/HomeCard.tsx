import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import HomeCardBtns from "./HomeCardBtns";

const HomeCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col">
        <CardTitle>Home</CardTitle>
        <CardDescription className="flex flex-col">
          Your personal eStudev homepage. Come here to collaborate with other
          students.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-row justify-center gap-3">
          <HomeCardBtns />
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
