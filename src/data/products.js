import { productImages } from "../assets/index";
const products = [
  {
    id: crypto.randomUUID(),
    name: "Gradient Graphic T-shirt",
    image: productImages.image1,
    rating: 4, // 4/5
    stock: 23,
    price: 140,
    discount: "0",
  },
  {
    id: crypto.randomUUID(),
    name: "Polo with Tipping Details",
    image: productImages.image2,
    rating: 5, // 4/5
    stock: 52,
    price: 90,
    discount: "20",
  },
  {
    id: crypto.randomUUID(),
    name: "Black Striped T-shirt",
    image: productImages.image3,
    rating: 2, // 4/5
    stock: 70,
    price: 110,
    discount: "0",
  },
  {
    id: crypto.randomUUID(),
    name: "Skinny Fit Jeans",
    image: productImages.image4,
    rating: 4, // 4/5
    stock: 0,
    price: 180,
    discount: "20",
  },
  {
    id: crypto.randomUUID(),
    name: "Checkered Shirt",
    image: productImages.image5,
    rating: 4, // 4/5
    stock: 5,
    price: 120,
    discount: "30",
  },
  {
    id: crypto.randomUUID(),
    name: "Sleeve Striped T-shirt",
    image: productImages.image6,
    rating: 5, // 4/5
    stock: 30,
    price: 55,
    discount: "0",
  },
  {
    id: crypto.randomUUID(),
    name: "Vertical Striped Shirt",
    image: productImages.image7,
    rating: 2, // 4/5
    stock: 12,
    price: 80,
    discount: "0",
  },
  {
    id: crypto.randomUUID(),
    name: "Courage Graphic T-shirt",
    image: productImages.image8,
    rating: 5, // 4/5
    stock: 23,
    price: 140,
    discount: "20",
  },
  {
    id: crypto.randomUUID(),
    name: "Loose Fit Bermuda Shorts",
    image: productImages.image9,
    rating: 3, // 4/5
    stock: 5,
    price: 220,
    discount: "0",
  },
];

export default products;
