// Home.jsx
import React from "react";
import FoodItemList from "../FoodItemList/Fooditemslists";

import { Card, Button } from "react-bootstrap";
const Home = ({ addToCart, removeCart, cartItems }) => {
  return (
    <div>
      {/* {cartItems.length > 0 && (
        <div style={{ border: "1px solid black", padding: "5px", marginTop: "10px", position: "absolute", right: "0px" }}>
          <div style={{ padding: "5px 0", borderBottom: "1px solid black" }}> Shopping cart </div>
          {cartItems.map(item => (
            <div key={item.name}>{item.name}</div>
          ))}
          <div style={{ padding: "5px 0", borderBottom: "1px solid black" }}>
            Quantity <span>
              <Button variant="secondary">
                -
              </Button>

              <span style={{ margin: "0 10px" }}>1</span>
              <Button variant="primary">
                +
              </Button>
            </span>
          </div>
          <div>
            <div>Subtotal < span>7.50</span></div>
            <div>Delivery Fee < span>3.50</span></div>
            <div>Total < span>10.00</span></div>
          </div>
        </div>
      )} */}
      <FoodItemList addToCart={addToCart} removeCart={removeCart} />

    </div>
  );
};

export default Home;
