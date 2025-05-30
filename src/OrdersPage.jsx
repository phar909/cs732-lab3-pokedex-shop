import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "./AppContextProvider";
import { createCartSummary } from "./useShoppingCartProducts";
import styles from "./OrdersPage.module.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export default function OrdersPage() {
  const { products } = useContext(AppContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
      });
  }, []);

  const orderSummaries = orders.map((order) => ({
    id: order.id,
    summary: createCartSummary(products, order.order)
  }));

  return (
    <>
      <h1>🚀Rocket Game Corner 🚀 - My Order History</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Products ordered</th>
            <th>Total cost</th>
          </tr>
        </thead>
        <tbody>
          {orderSummaries.map((os) => (
            <tr key={os.id}>
              <td>{os.id}</td>
              <td>{getOrderSummaryString(os.summary)}</td>
              <td>{os.summary.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function getOrderSummaryString(summary) {
  return summary.map((line) => `${line.count} ${line.product.name}`).join(", ");
}
