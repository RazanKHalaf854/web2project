import React from "react";
import { Menulist } from "../data/Menulist";
import MenuItem from "../Component/MenuItem";
import "../App.css";

function Menu() {
  return (
    <div className="menuPage">
      <div className="menuContainer">
        {Menulist.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;

  

