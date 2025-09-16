import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
import OrderSummery from "./OrderSummery";

function Carts() {
  const carts = useCart();

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
        {carts.cart_items.map((cart) => (
          <CartItem
            key={cart.productId}
            productId={cart.productId}
            quantity={cart.quantity}
          />
        ))}

        <OrderSummery />
      </div>
    </div>
  );
}
export default Carts;
