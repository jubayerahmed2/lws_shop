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
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Products;
