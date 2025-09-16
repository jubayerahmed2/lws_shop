import CartIcon from "../assets/icons/CartIcon";
import { useCart } from "../contexts/CartProvider";

function CartButton() {
  const carts = useCart();
  return (
    <div className="relative ">
      <CartIcon />
      <span className="text-sm absolute bg-yellow-600 text-white rounded-full -top-1 -right-1 flex  items-center h-4 w-4 justify-center  ">
        {carts.cart_items.length}
      </span>
    </div>
  );
}
export default CartButton;
