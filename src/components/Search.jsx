import SearchIcon from "../assets/icons/SearchIcon";
import { useProduct, useProductDispatch } from "../contexts/ProductProvider";
import Input from "./Input";

function Search() {
  const dispatch = useProductDispatch();
  const { query } = useProduct();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH",
      query: e.target.value,
    });
  };
  return (
    <div className="relative hidden md:block w-64">
      <Input
        type="text"
        placeholder="Search for products..."
        className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
        value={query}
        onChange={handleChange}
      />
      <span className="absolute right-3 top-2">
        <SearchIcon />
      </span>
    </div>
  );
}
export default Search;
