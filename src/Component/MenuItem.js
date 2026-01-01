import React, { useContext } from "react";
import { CartContext } from "../pages/CartContext";
import "../App.css";

function MenuItem({ name, price, image, item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menuItem">
      <img src={image} alt={name} className="menuImage" />

      <h3 className="menuTitle">{name}</h3>
      <p className="menuPrice">{price}</p>

      <button onClick={() => addToCart(item)} className="btn">
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;

