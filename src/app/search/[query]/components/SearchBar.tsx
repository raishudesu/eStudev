import { getServerSession } from "next-auth";
import SearchForm from "./SearchForm";
import { authOptions } from "@/lib/auth";

const SearchBar = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return null;
  return (
    <search className="flex items-center space-x-2 border rounded-lg">
      <SearchForm />
    </search>
  );
};

export default SearchBar;
