import { useCartDispatch } from "../contexts/CartProvider";
import { calculateDiscount } from "../utils/calculate_discount";

function Product({ product }) {
  const dispatch = useCartDispatch();

  const { id, name, image, stock, price, rating, discount } = product || {};
  const discountPrice =
    price - calculateDiscount(parseInt(price), parseInt(discount));

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={name} className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">{ratings(rating)}</div>
            <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
          </div>
          <span className="text-xs text-gray-700">({stock} pcs left)</span>
        </div>
        <div className="flex  space-x-2 items-center">
          {+discount ? (
            <>
              <p className="font-bold">${discountPrice} </p>
              <del className="text-gray-400">${price}</del>
              <p className="bg-yellow-200 px-2 rounded-sm text-sm">
                {discount}%{" "}
              </p>
            </>
          ) : (
            <p className="font-bold">${price} </p>
          )}
        </div>
        <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
          Remove from Cart
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "CREATE",
              payload: {
                id,
                quantity: 1,
              },
            });
          }}
          className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 cursor-pointer text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Product;

const ratings = ({ rating }) => {
  const result = [];

  let maxRating = 5;
  for (let r = 0; r < maxRating; r++) {
    if (r < rating) {
      result.push(<span key={r}>★</span>);
    } else {
      result.push(
        <span className="text-gray-300" key={r}>
          ★
        </span>
      );
    }
  }

  return result;
};
