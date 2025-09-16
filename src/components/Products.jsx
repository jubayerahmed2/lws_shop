import { useProduct } from "../contexts/ProductProvider";
import Product from "./Product";
import SortProducts from "./SortProducts";

function Products() {
  const products = useProduct();
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <SortProducts />
      </div>

      {products.products.length > 0 && (
        <div className="product-grid">
          {products.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}

      {products.products.length === 0 && (
        <div className="bg-gray-400 h-40 rounded-sm flex justify-center items-center w-full text-5xl">
          {products.error}
        </div>
      )}
    </div>
  );
}
export default Products;
