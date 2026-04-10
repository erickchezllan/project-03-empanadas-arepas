import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/items`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  function handleAddToCart(item) {
    console.log("Added to cart:", item);
  }

  return (
    <div>
      <h1>Empanadas & Arepas Menu</h1>
      {items.map((item) => (
        <FoodCard key={item.id} item={item} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default HomePage;