import { useState } from "react";
import CouponIcon from "../assets/icons/CouponIcon";
import { useCart, useCartDispatch } from "../contexts/CartProvider";
import { useProduct, useProductDispatch } from "../contexts/ProductProvider";
import { calculateDiscount } from "../utils/calculate_discount";

function calculateOrder(carts, products, applyCoupon) {
  let result = {
    subtotal: 0,
    discount: 20,
    discountAmount: 0,
    deliveryFee: 15,
    total: 0,
  };

  carts.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);

    const subtractedDiscount =
      product.price - calculateDiscount(product.price, product.discount);
    result.total += subtractedDiscount * item.quantity;

    result.subtotal += subtractedDiscount * item.quantity;
  });

  result.discountAmount = calculateDiscount(result.total, result.discount);
  result.total -= result.discountAmount;

  if (applyCoupon) {
    result.total -= calculateDiscount(result.total, 20); // 20% on coupon
  }

  if (result.total) {
    result.total += result.deliveryFee;
  }

  return result;
}

function OrderSummery() {
  const { products } = useProduct();
  const cartDispatch = useCartDispatch();
  const productDispatch = useProductDispatch();
  const carts = useCart();
  const [applyCoupon, setApplyCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");

  const handleApplyCoupon = () => {
    setError("");
    if (coupon.trim() !== "SUMIT20") {
      setError(`Wrong coupon: ${coupon}`);
    }
    setApplyCoupon(true);
    setCoupon("");
  };

  const handleCheckout = () => {
    cartDispatch({
      type: "RESET",
    });
    productDispatch({
      type: "RESET",
    });

    alert(
      "THANK YOU for checking out. Unfortunately, this application doesnt handling this type of actins right now"
    );
  };

  let { deliveryFee, discount, subtotal, total, discountAmount } =
    calculateOrder(carts.cart_items, products, applyCoupon);

  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Discount (-{carts.cart_items.length ? discount : 0}%)</span>
          <span>-${discountAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">${deliveryFee}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 ">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Try - 'SUMIT20'"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm pl-8"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <span className="absolute left-3 top-2.5">
            <CouponIcon />
          </span>
        </div>
        <button
          disabled={!carts.cart_items.length}
          onClick={handleApplyCoupon}
          className="bg-black text-white rounded-md cursor-pointer px-4 py-2 text-sm disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Apply
        </button>
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}

      <button
        disabled={!carts.cart_items.length}
        onClick={handleCheckout}
        className="mt-6 block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors w-full cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-600"
      >
        Go to Checkout
        <span className="inline-block ml-2">→</span>
      </button>
    </div>
  );
}
export default OrderSummery;
