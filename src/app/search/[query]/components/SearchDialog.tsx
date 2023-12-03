"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchBtn from "@/components/SearchBtn";
import SearchForm from "./SearchForm";
import { useState } from "react";
import { useSession } from "next-auth/react";

const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  if (status === "unauthenticated") {
    return null;
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-full" onClick={() => setOpen(!open)}>
          <SearchBtn />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Search thread and other thinkers
          </DialogDescription>
        </DialogHeader>
        <search className="flex items-center space-x-2">
          <SearchForm setOpen={setOpen} />
        </search>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
