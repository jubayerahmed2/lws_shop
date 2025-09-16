import { useProductDispatch } from "../contexts/ProductProvider";

function SortProducts() {
  const dispatch = useProductDispatch();
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">Sort by:</span>
      <select
        onChange={(e) => {
          dispatch({
            type: "SORT",
            sortType: e.target.value,
          });
        }}
        className="border rounded-md px-2 py-1 text-sm"
      >
        <option value="popular">Most Popular</option>
        <option value="newest">Newest</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>
    </div>
  );
}
export default SortProducts;
