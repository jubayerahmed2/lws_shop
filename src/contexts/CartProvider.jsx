import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

const initialCarts = {
  cart_items: [], // store {productId, quantity}
  error: "",
};

export default function CartProvider({ children }) {
  const [carts, dispatch] = useReducer(cartReducer, initialCarts);

  return (
    <CartContext.Provider value={carts}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
