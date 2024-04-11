// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import FoodCard from "./foodcard";

// const FoodItemList = () => {
//   const foodItems = [
//     {
//       name: "Pizza",
//       description: "Delicious pizza with cheese and toppings",
//       image: "https://1tsp.in/wp-content/uploads/2021/07/image-1.jpg",
//     },
//     {
//       name: "Burger",
//       description: "Juicy burger with beef patty and veggies",
//       image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
//     },
//     {
//       name: "Spaghetti",
//       description: "Classic spaghetti with marinara sauce",
//       image: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
//     },
//     {
//       name: "Sushi",
//       description: "Assorted sushi rolls with fresh seafood",
//       image: "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
//     },
//     {
//       name: "Tacos",
//       description: "Tasty tacos with seasoned meat and salsa",
//       image: "https://www.allrecipes.com/thmb/vG-of0Xa0W0eodSXPWV1KXD009U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/70935-taqueria-style-tacos-mfs-3x2-35-9145991a0ef94ceb8be05ae8d6be4f0f.jpg",
//     },
//     {
//       name: "Pancakes",
//       description: "Fluffy pancakes with maple syrup and butter",
//       image: "https://www.marthastewart.com/thmb/9SwNGFbxZv2ttLQ3uvZe_McJChk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j",
//     },
//     {
//       name: "Salad",
//       description: "Fresh salad with mixed greens and vinaigrette",
//       image: "https://cdn.jwplayer.com/v2/media/wGEqBtuf/thumbnails/qSXwlEH3.jpg",
//     },
//     {
//       name: "Fried Chicken",
//       description: "Crispy fried chicken pieces with dipping sauce",
//       image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/2/23/FNK_Indian-Fried-Chicken_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1677264108617.jpeg",
//     },
//     {
//       name: "Ice Cream",
//       description: "Creamy ice cream scoops with chocolate sauce",
//       image: "https://static.toiimg.com/photo/101136807.cms",
//     },
//     {
//       name: "Steak",
//       description: "Grilled steak with garlic butter and herbs",
//       image: "https://www.seriouseats.com/thmb/WzQz05gt5witRGeOYKTcTqfe1gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg",
//     },
//     {
//       name: "Pasta",
//       description: "Classic Italian pasta with tomato sauce and basil",
//       image: "https://skinnyspatula.com/wp-content/uploads/2022/01/Pink_Pasta_Sauce1.jpg",
//     },
//     {
//       name: "Sushi Bowl",
//       description: "Deconstructed sushi served in a bowl with rice and assorted toppings",
//       image: "https://healthyfitnessmeals.com/wp-content/uploads/2017/12/easy-sushi-bowls-square-2.jpg",
//     },
//   ];

//   return (
//     <Container>
//       <Row>
//         {foodItems.map((foodItem, index) => (
//           <Col key={index}>
//             <FoodCard foodItem={foodItem} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default FoodItemList;

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import FoodCard from './foodcard';

// const FoodItemList = () => {
//   const [foodItems, setFoodItems] = useState([]);

//   useEffect(() => {
//     // Fetch mock data from JSONPlaceholder
//     fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
//       .then(response => response.json())
//       .then(data => setFoodItems(data))
//       .catch(error => console.error('Error fetching food items:', error));
//   }, []); // Empty dependency array to run effect only once on component mount

//   return (
//     <Container>
//       <Row>
//         {foodItems.map((foodItem, index) => (
//           <Col key={index}>
//             <FoodCard
//               name={foodItem.title}
//               description={foodItem.title}
//               image={foodItem.url}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default FoodItemList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios
// import { Container, Row, Col } from 'react-bootstrap';
// import FoodCard from './foodcard';

// const FoodItemList = () => {
//   const [foodItems, setFoodItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
//         headers: {
//           'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//           'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setFoodItems(response.data);
//       } catch (error) {
//         console.error('Error fetching food items:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Container>
//       <Row>
//         {foodItems.map((foodItem, index) => (
//           <Col key={index}>
//             <FoodCard
//               name={foodItem.title}
//               description={foodItem.title}
//               image={foodItem.url}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default FoodItemList;

// FoodItemList.jsx

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import FoodCard from "./foodcard";

// const FoodItemList = ({ addToCart }) => {
//   const foodItems = [
//     {
//       name: "Pizza",
//       description: "Delicious pizza with cheese and toppings",
//       image: "https://1tsp.in/wp-content/uploads/2021/07/image-1.jpg",
//     },
//     {
//       name: "Burger",
//       description: "Juicy burger with beef patty and veggies",
//       image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
//     },
//     {
//       name: "Spaghetti",
//       description: "Classic spaghetti with marinara sauce",
//       image: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
//     },
//     {
//       name: "Sushi",
//       description: "Assorted sushi rolls with fresh seafood",
//       image: "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
//     },
//     {
//       name: "Tacos",
//       description: "Tasty tacos with seasoned meat and salsa",
//       image: "https://www.allrecipes.com/thmb/vG-of0Xa0W0eodSXPWV1KXD009U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/70935-taqueria-style-tacos-mfs-3x2-35-9145991a0ef94ceb8be05ae8d6be4f0f.jpg",
//     },
//     {
//       name: "Pancakes",
//       description: "Fluffy pancakes with maple syrup and butter",
//       image: "https://www.marthastewart.com/thmb/9SwNGFbxZv2ttLQ3uvZe_McJChk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j",
//     },
//     {
//       name: "Salad",
//       description: "Fresh salad with mixed greens and vinaigrette",
//       image: "https://cdn.jwplayer.com/v2/media/wGEqBtuf/thumbnails/qSXwlEH3.jpg",
//     },
//     {
//       name: "Fried Chicken",
//       description: "Crispy fried chicken pieces with dipping sauce",
//       image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/2/23/FNK_Indian-Fried-Chicken_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1677264108617.jpeg",
//     },
//     {
//       name: "Ice Cream",
//       description: "Creamy ice cream scoops with chocolate sauce",
//       image: "https://static.toiimg.com/photo/101136807.cms",
//     },
//     {
//       name: "Steak",
//       description: "Grilled steak with garlic butter and herbs",
//       image: "https://www.seriouseats.com/thmb/WzQz05gt5witRGeOYKTcTqfe1gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg",
//     },
//     {
//       name: "Pasta",
//       description: "Classic Italian pasta with tomato sauce and basil",
//       image: "https://skinnyspatula.com/wp-content/uploads/2022/01/Pink_Pasta_Sauce1.jpg",
//     },
//     {
//       name: "Sushi Bowl",
//       description: "Deconstructed sushi served in a bowl with rice and assorted toppings",
//       image: "https://healthyfitnessmeals.com/wp-content/uploads/2017/12/easy-sushi-bowls-square-2.jpg",
//     },
//   ];

//   return (
//     <Container>
//       <Row>
//         {foodItems.map((foodItem, index) => (
//           <Col key={index}>
//             {/* Pass addToCart function to FoodCard component */}
//             <FoodCard foodItem={foodItem} addToCart={addToCart} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default FoodItemList;

//lastpart
// FoodItemList.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FoodCard from "../FoodCard/Foodcard";

const FoodItemList = ({ addToCart, removeCart }) => {
  const foodItems = [
    {
      name: "Pizza",
      description: "Delicious pizza with cheese and toppings",
      image:
        "https://images.unsplash.com/photo-1691096675075-de995918f3ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
    },
    {
      name: "Burger",
      description: "Juicy burger with beef patty and veggies",
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Spaghetti",
      description: "Classic spaghetti with marinara sauce",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Sushi",
      description: "Assorted sushi rolls with fresh seafood",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Tacos",
      description: "Tasty tacos with seasoned meat and salsa",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pancakes",
      description: "Fluffy pancakes with maple syrup and butter",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Salad",
      description: "Fresh salad with mixed greens and vinaigrette",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Fried Chicken",
      description: "Crispy fried chicken pieces with dipping sauce",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Ice Cream",
      description: "Creamy ice cream scoops with chocolate sauce",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Steak",
      description: "Grilled steak with garlic butter and herbs",
      image:
        "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww",
    },
    {
      name: "Pasta",
      description: "Classic Italian pasta with tomato sauce and basil",
      image:
        "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww",
    },
    {
      name: "Sushi Bowl",
      description:
        "Deconstructed sushi served in a bowl with rice and assorted toppings",
      image:
        "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww",
    },
  ];

  return (
    <Container>
      <Row>
        {foodItems.map((foodItem, index) => (
          <Col key={index}>
            <FoodCard
              foodItem={foodItem}
              addToCart={addToCart}
              removeCart={removeCart}
            />{" "}
            {/* Pass addToCart function */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FoodItemList;
