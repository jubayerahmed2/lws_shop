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

    default:
      break;
  }
};
