import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import SpecialsPage from "./pages/SpecialsPage";
import "./App.css";
import { useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";

function App() {
const { cartItems } = useContext(CartContext);
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/cart">🛒 Cart ({cartItems.length})</Link>
        <Link to="/specials">⭐ Specials</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/specials" element={<SpecialsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;