import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const SubFooter = () => {
  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex gap-3 flex-wrap">
          <small className="text-sm font-medium leading-none">
            User Agreement
          </small>
          <small className="text-sm font-medium leading-none">
            Privacy Policy
          </small>
          <small className="text-sm font-medium leading-none">
            Content Policy
          </small>
        </div>
        <Separator />
        <small className="text-sm font-medium leading-none">
          ThinkSync © 2023. All rights reserved.
        </small>
      </CardContent>
    </Card>
  );
};

export default SubFooter;
