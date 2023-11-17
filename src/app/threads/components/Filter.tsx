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

export const filters = [
  {
    item: "All",
    value: "all",
  },
  {
    item: "Discussion",
    value: "discussion",
  },
  {
    item: "Problem",
    value: "problem",
  },
  {
    item: "Project Showcase",
    value: "showcase",
  },
  {
    item: "Question",
    value: "question",
  },
  {
    item: "Rant",
    value: "rant",
  },
  {
    item: "Resource",
    value: "resource",
  },
];

const Filter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {filters.map(({ item, value }, index) => (
            <SelectItem key={index} value={value}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Filter;
