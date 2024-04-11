import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const FoodCard = ({ foodItem, addToCart, removeCart }) => {
  const [cartCount, setCartCount] = useState(0);
  let [array, setArray] = useState([]);
  const handleAddToCart = () => {
    let newCount = cartCount + 1;
    setCartCount(newCount);
    addToCart(foodItem);
    array.push(foodItem);
    setArray(array);
    console.log('array = ', array);
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      let newCount = cartCount - 1;
      setCartCount(newCount);
      removeCart(foodItem);

      const index = array.findIndex((item) => item.name === foodItem.name);
      if (index !== -1) {
        // Create a new array without the item to be removed
        const updatedCart = array.filter((_, i) => i !== index);
        setArray(updatedCart);
        console.log('array = ', updatedCart);
      }
    }
  };

  return (
    <Card style={{ width: "18rem", height: "24rem", marginBottom: "20px" }}>
      <Card.Img
        variant="top"
        src={foodItem.image}
        style={{ width: "100%", height: "50%" }}
      />
      <Card.Body style={{ position: "absolute", bottom: "0px" }}>
        <Card.Title>{foodItem.name}</Card.Title>
        <Card.Text>{foodItem.description}</Card.Text>
        <div>
          {
            cartCount === 0 && (
              <Button variant="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            )
          }
          {cartCount > 0 && (
            <>
              <Button variant="secondary" onClick={handleRemoveFromCart}>
                -
              </Button>

              <span style={{ margin: "0 10px" }}>{cartCount}</span>
              <Button variant="primary" onClick={handleAddToCart}>
                +
              </Button>
            </>
          )}


        </div>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
