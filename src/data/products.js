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
    createdAt: new Date("2025-05-25"),
  },
  {
    id: crypto.randomUUID(),
    name: "Polo with Tipping Details",
    image: productImages.image2,
    rating: 5, // 5/5
    stock: 2,
    price: 90,
    discount: "20",
    createdAt: new Date("2025-03-5"),
  },
  {
    id: crypto.randomUUID(),
    name: "Black Striped T-shirt",
    image: productImages.image3,
    rating: 2, // 2/5
    stock: 70,
    price: 110,
    discount: "0",
    createdAt: new Date("2025-02-21"),
  },
  {
    id: crypto.randomUUID(),
    name: "Skinny Fit Jeans",
    image: productImages.image4,
    rating: 4, // 4/5
    stock: 0,
    price: 180,
    discount: "20",
    createdAt: new Date("2025-01-3"),
  },
  {
    id: crypto.randomUUID(),
    name: "Checkered Shirt",
    image: productImages.image5,
    rating: 4, // 4/5
    stock: 5,
    price: 120,
    discount: "30",
    createdAt: new Date("2025-05-25"),
  },
  {
    id: crypto.randomUUID(),
    name: "Sleeve Striped T-shirt",
    image: productImages.image6,
    rating: 5, // 5/5
    stock: 30,
    price: 55,
    discount: "0",
    createdAt: new Date("2025-09-21"),
  },
  {
    id: crypto.randomUUID(),
    name: "Vertical Striped Shirt",
    image: productImages.image7,
    rating: 2, // 2/5
    stock: 12,
    price: 80,
    discount: "0",
    createdAt: new Date("2025-02-12"),
  },
  {
    id: crypto.randomUUID(),
    name: "Courage Graphic T-shirt",
    image: productImages.image8,
    rating: 5, // 5/5
    stock: 23,
    price: 140,
    discount: "20",
    createdAt: new Date("2025-05-23"),
  },
  {
    id: crypto.randomUUID(),
    name: "Loose Fit Bermuda Shorts",
    image: productImages.image9,
    rating: 3, // 5/5
    stock: 5,
    price: 220,
    discount: "0",
    createdAt: new Date("2025-08-15"),
  },
];

export default products;
