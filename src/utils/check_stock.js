import products from "../data/products";

export const checkStock = (quantity, product) => {
  const productInfo = products.find((p) => p.id === product);

  if (productInfo.stock <= quantity) {
    return false;
  }

  return true;
};
