import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="discussion">Discussion</SelectItem>
          <SelectItem value="problem">Problem</SelectItem>
          <SelectItem value="showcase">Project Showcase</SelectItem>
          <SelectItem value="question">Question</SelectItem>
          <SelectItem value="rant">Rant</SelectItem>
          <SelectItem value="resource">Resource</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Filter;
