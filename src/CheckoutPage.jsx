import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { useNavigate } from "react-router-dom";
import useShoppingCartProducts from "./useShoppingCartProducts";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export default function CheckoutPage() {
  const { clearCart } = useContext(AppContext);
  const productsInCart = useShoppingCartProducts();
  const navigate = useNavigate();

  async function handlePay() {
    const cartProductIds = productsInCart.flatMap((group) =>
      Array(group.count).fill(group.product.id)
    );

    try {
      const response = await axios.post(`${API_BASE_URL}/api/orders`, cartProductIds);

      if (response.status === 201) {
        clearCart();
        navigate("/history", { replace: true });
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("POST /api/orders failed:", error);
      alert("There was an error placing your order. Please try again later.");
    }
  }

  return (
    <>
      <h1>🚀Rocket Game Corner 🚀 - Checkout</h1>
      <ul>
        {productsInCart.map((group, index) => (
          <li key={index}>
            {group.count} {group.product.name}, 🪙
            {group.product.cost.toLocaleString("en-NZ")}ea
          </li>
        ))}
      </ul>
      <p>
        <strong>Total cost</strong> 🪙
        {productsInCart.totalCost.toLocaleString("en-NZ")}
      </p>
      <button onClick={handlePay}>Pay now</button>
    </>
  );
}
