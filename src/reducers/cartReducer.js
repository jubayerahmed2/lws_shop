import { checkStock } from "../utils/check_stock";

const cartReducer = (state, action) => {
  /*
    -> Actions:
     1. Create new cart item as - {productId, quantity = 0}
     2. Remove a item from cart by product id 
     3. Increment quantity 
     4. Decrement quantity 
     5. Clean all item 
    */

  switch (action.type) {
    case "CREATE": {
      const alreadyExist = state.cart_items.find(
        (item) => item.productId === action.payload.id
      );

      if (alreadyExist) {
        return {
          ...state,
          cart_items: state.cart_items.filter(
            (item) => item.productId !== action.payload.id
          ),
        };
      }

      return {
        ...state,
        cart_items: [
          ...state.cart_items,
          {
            ...action.payload,
            productId: action.payload.id,
          },
        ],
      };
    }
    case "INC": {
      const cart = state.cart_items.find(
        (c) => c.productId === action.payload.id
      );
      const hasEnoughStock = checkStock(cart.quantity, action.payload.id);

      if (!hasEnoughStock) {
        return {
          ...state,
          error: "Not enough stock",
        };
      }

      const nextCarts = state.cart_items.map((item) => {
        if (item.productId === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart_items: nextCarts,
      };
    }
    case "DEC": {
      const cart = state.cart_items.find(
        (c) => c.productId === action.payload.id
      );

      if (cart.quantity === 1) {
        return {
          ...state,
          error: "Cannot perform this action",
        };
      }

      const nextCarts = state.cart_items.map((item) => {
        if (item.productId === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart_items: nextCarts,
      };
    }
    case "DELETE": {
      return {
        ...state,
        cart_items: state.cart_items.filter(
          (item) => item.productId !== action.payload.id
        ),
      };
    }
    case "CLEAR": {
      return [];
    }

    default:
      return {
        ...state,
        error: `Unknown Action: ${action.type}`,
      };
  }
};

export { cartReducer };
