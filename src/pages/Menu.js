import React from "react";
import { Menulist } from "../data/Menulist";
import MenuItem from "../Component/MenuItem";

function Menu() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div 
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
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
  
