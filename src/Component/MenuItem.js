import React, { useContext } from "react";
import { CartContext } from "../pages/CartContext";
import "../pages/Cart.css";

function MenuItem({ name, price, image, item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div 
        style={{
        width: "220px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
       
        textAlign: "center",
      }}
       >

     
 <img 

        src={image}
        alt={name}
          style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
          
        ></img>
     
     
     

      <h3 className=".menuItem h1 ">{name}</h3>
      <p className=".menuItem p">{price}</p>

      <button
        onClick={() => addToCart(item)}
      className="btn"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;