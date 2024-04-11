
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Offers from "./components/Offers/Offers";
import Help from "./components/Help/Help";
import SignInPage from "./components/Login/Signinpage";
import EmailVerification from "./components/EmailVerification/EmailVerification";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OTP from "./components/Otp/Otp";
import {useNavigate} from 'react-router-dom';
import Constants from "./Constants/Constants";
import axios from 'axios';
const App = () => {
  const API_URL = Constants.API_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(API_URL + 'api/v1/users/fetch-user', {
          withCredentials: true, credentials : 'include'});
        if(response.data.status === 'success'){
          // document.cookie = `user=${JSON.stringify(response.data.user)}`;
          console.log('user',response.data.user);
        } else {
          // document.cookie = `user=${null}`;
          console.log('user',null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);



  const getCookie = (name) => {
    const cookieString = document.cookie;
    console.log('cookieString',cookieString);
    const cookies = cookieString.split(';');
    console.log('cookies',cookies);
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (foodItem) => {
    setCartItems([...cartItems, foodItem]);
  };
  const removeCart = (foodItem) => {
    const index = cartItems.findIndex((item) => item.name === foodItem.name);
    if (index !== -1) {
      const leftItems = cartItems.slice(0, index);
      const rightItems = cartItems.slice(index + 1);
      const updatedCart = [...leftItems, ...rightItems];
      setCartItems(updatedCart);
    }
  };


  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme : "dark"
  }

  return (
    <Router>
      <div>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} removeCart={removeCart} cartItems= {cartItems} />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/verify-email/:token" element={<EmailVerification />} />
        </Routes>
      </div>
      <ToastContainer {...toastOptions}/>
    </Router>
  );
};

export default App;
