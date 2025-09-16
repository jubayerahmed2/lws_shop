import products from "../data/products";
import { debounce } from "../utils/debounce";

export const productReducer = (prevState, action) => {
  /*
    -> Sort products - implement bubble sort algorithm
    */

  switch (action.type) {
    case "SORT": {
      // copy object (not deeply)
      let result = [...prevState];

      if (action.sortType === "low-high") {
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result.length - i - 1; j++) {
            const high = result[j];
            const low = result[j + 1];

            if (high.price > low.price) {
              result[j] = low;
              result[j + 1] = high;
            }
          }
        }
      } else if (action.sortType === "high-low") {
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result.length - i - 1; j++) {
            const high = result[j];
            const low = result[j + 1];

            if (high.price < low.price) {
              result[j] = low;
              result[j + 1] = high;
            }
          }
        }
      } else if (action.sortType === "popular") {
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result.length - i - 1; j++) {
            const big = result[j];
            const small = result[j + 1];

            if (small.rating > big.rating) {
              result[j] = small;
              result[j + 1] = big;
            }
          }
        }
      } else if (action.sortType === "newest") {
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result.length - i - 1; j++) {
            const latest = result[j];
            const old = result[j + 1];

            if (latest.createdAt < old.createdAt) {
              result[j] = old;
              result[j + 1] = latest;
            }
          }
        }
      }

      return result;
    }

    case "SEARCH": {
      let result = products;
      const searchProduct = (query) => {
        const res = products.filter((product) => {
          return product.name.includes(query);
        });

        result = res;
      };

      debounce(searchProduct(action.query), 1000);

      return {
        ...prevState,
        products: result,
        query: action.query,
      };
    }
    default:
      return prevState;
  }
};
