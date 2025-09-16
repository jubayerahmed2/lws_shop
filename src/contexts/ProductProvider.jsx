import { createContext, useContext, useReducer } from "react";
import initialState from "../data/products";
import { productReducer } from "../reducers/productReducer";

const ProductContext = createContext(null);
const ProductDispatchContext = createContext(null);

export default function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={state}>
      <ProductDispatchContext value={dispatch}>
        {children}
      </ProductDispatchContext>
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
export function useProductDispatch() {
  return useContext(ProductDispatchContext);
}
