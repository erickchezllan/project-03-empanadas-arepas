import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

function CartPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [customerName, setCustomerName] = useState("");
  const [message, setMessage] = useState("");

  async function handlePlaceOrder() {
    if (cartItems.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    const order = {
      customerName,
      items: cartItems,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();
      console.log("Order saved:", data);

      clearCart();
      setCustomerName("");
      setMessage("Order placed successfully!");
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong.");
    }
  }

 return (
  <div className="page">
    <h1>🛒 Your Cart</h1>

    {cartItems.length === 0 ? (
      <p style={{ fontStyle: "italic" }}>Your cart is empty. Add some empanadas!</p>
    ) : (
      <>
        <div className="grid">
          {cartItems.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <h3>Order Summary</h3>
          <p>Total items: {cartItems.length}</p>
          <input
            type="text"
            placeholder="Your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <button onClick={handlePlaceOrder}>📦 Place Order</button>
        </div>

        {message && <p style={{ fontWeight: "bold", marginTop: "20px" }}>{message}</p>}
      </>
    )}
  </div>
);
 }

export default CartPage;