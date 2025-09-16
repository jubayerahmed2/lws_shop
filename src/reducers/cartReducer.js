import { checkStock } from "../utils/check_stock";

const cartReducer = (carts, action) => {
  /*
    -> Actions:
     1. Create new cart item as - {productId, quantity = 0}
     2. Remove a item from cart by product id 
     3. Increment quantity 
     4. Decrement quantity 
     5. Clean all item 
    */

  let state = carts.cart_items;

  switch (action.type) {
    case "CREATE": {
      console.log("error");

      const alreadyExist = state.find(
        (item) => item.productId === action.payload.id
      );
      // if (alreadyExist) {
      //   throw Error("Item already in cart");
      // }

      return [
        ...state,
        {
          ...action.payload,
          productId: action.payload.id,
        },
      ];
    }
    case "INC": {
      const nextCarts = state.map((item) => {
        if (item.productId === action.payload.id) {
          const hasEnoughStock = checkStock(state.quantity, action.payload.id);

          if (!hasEnoughStock) {
            throw Error("Not enough stock");
          }

          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      return nextCarts;
    }
    case "DEC": {
      const nextCarts = state.map((item) => {
        if (item.productId === action.payload.id) {
          if (item.quantity === 1) {
            throw Error("Cannot perform this action");
          }

          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      return nextCarts;
    }
    case "DELETE": {
      const nextCarts = state.filter(
        (item) => item.productId !== action.payload.id
      );

      return nextCarts;
    }
    case "CLEAR": {
      return [];
    }

    default:
      throw Error("Unknown Action: ", action.type);
  }
};

export { cartReducer };
