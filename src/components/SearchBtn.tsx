import { Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchBtn = () => {
  return (
    <Button size="sm" variant={"outline"} className="flex gap-6 px-6">
      Search threads... <Search size={20} />
    </Button>
  );
};

export default SearchBtn;
