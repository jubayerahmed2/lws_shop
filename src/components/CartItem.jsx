import { useCartDispatch } from "../contexts/CartProvider";
import { useProduct } from "../contexts/ProductProvider";
import { calculateDiscount } from "../utils/calculate_discount";

function CartItem({ productId, quantity }) {
  const dispatch = useCartDispatch();
  const products = useProduct();
  const productInfo = products.find((p) => p.id === productId);

  const { id, image, name, price, discount } = productInfo || {};

  const discountPrice =
    price - calculateDiscount(parseInt(price), parseInt(discount));

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img src={image} alt={name} className="h-full w-auto object-cover" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{name}</h3>
          <button
            onClick={() => {
              dispatch({
                type: "DELETE",
                payload: {
                  id,
                },
              });
            }}
            className="text-red-500 text-sm cursor-pointer"
          >
            ×
          </button>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">${discountPrice}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                dispatch({
                  type: "DEC",
                  payload: {
                    id,
                  },
                });
              }}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
            >
              −
            </button>
            <span className="text-sm">{quantity} </span>
            <button
              onClick={() => {
                dispatch({
                  type: "INC",
                  payload: {
                    id,
                  },
                });
              }}
              className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
