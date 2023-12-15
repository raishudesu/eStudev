import React from "react";
import CreateThread from "../components/CreateThread";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create thread | eStudev",
};

const CreateThreadPage = () => {
  return (
    <div className="w-full col-span-2">
      <CreateThread />
    </div>
  );
};

export default CreateThreadPage;
