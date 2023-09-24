// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from "./Navbar";

import Home from "./Home";
import Sell from "./Sell";
import Cart from "./Cart";
import Notify from "./Notify";
import Error404 from "./Error404";
import Login from "./Login";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePayment from './StripePayment.jsx';

const stripePromise = loadStripe('pk_test_51NpSmWSGVxMTh93KCjYXTfNzZVuQn9ksikoo6hV6fo9SqPeKtW3OCUyIQaI0HowI5jSwlQo4m9ClfLY9cLsIJvil00yroLyZ0E');

function StripePaymentRoute() {
  const [paymentAmount, setPaymentAmount] = useState(0);
  // const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  return (
    
    <Elements stripe={stripePromise}>
      <StripePayment
        totalAmount={paymentAmount}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </Elements>
  );
}

function App() {

  const [cartItems, setCartItems] = useState([]); // Initialize an empty cart

  // Function to add an item to the cart
  const addToCart = (product) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((item) => item.name === product.name);
  
    if (existingItem) {
      // If an item with the same name is already in the cart, update its quantity
      existingItem.quantity += 1;
    } else {
      // If the item is not in the cart, add it with quantity 1
      const newItem = {
        ...product,
        quantity: 1,
        total: product.price * 1,
      };
      updatedCart.push(newItem);
    }
  
    setCartItems(updatedCart);
  };
  
  console.log("cartItems :: ", cartItems);

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cart" element={<Cart totalCartItems={cartItems} />} />{" "}
        {/* Order page inside Cart page */}
        <Route path="/notify" element={<Notify />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/stripe-payment" element={<StripePaymentRoute />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
