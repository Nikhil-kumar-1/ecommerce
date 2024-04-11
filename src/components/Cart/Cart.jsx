import React from 'react';
import { Card, Button } from "react-bootstrap";

const Cart = ({ cartItems, foodItem }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
      //     <Card.Body style={{ position: "absolute", bottom: "0px" }}>
      //   <Card.Title>{foodItem.name}</Card.Title>
      //   <Card.Text>{foodItem.description}</Card.Text>
      //   <Button variant="primary" onClick={handleAddToCart}>
      //     Add to Cart
      //   </Button>
      // </Card.Body>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
