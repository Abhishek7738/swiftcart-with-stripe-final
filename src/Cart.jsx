import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Cart = ({ totalCartItems }) => {
  const [showStripePayment, setShowStripePayment] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(totalCartItems);
  }, []);

  const removeFromCart = (itemId) => {
    // Find the index of the item with the matching itemId
    const indexToRemove = cartItems.findIndex((item) => item.id === itemId);

    if (indexToRemove !== -1) {
      // Create a copy of the cartItems array and remove the item at the found index
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(indexToRemove, 1);

      // Update the cartItems state with the modified array
      setCartItems(updatedCartItems);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  // const handleCheckoutClick = () => {
  //   // Set the state to true to show StripePayment
  //   setShowStripePayment(true);
  // };

  return (
    <div className="cart-container">
      <table className="cart-items">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price * item.quantity}</td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
          <p>Total: ₹{calculateTotalPrice()}</p>
          {cartItems.length > 0 ? (
            <Link to="/stripe-payment" className="checkout-button" state={{ totalAmount: calculateTotalPrice() }}>
              Checkout
            </Link>
          ) : (
            <p>No items in the cart</p>
          )}
        </div>

      {/* {showStripePayment ? <StripePayment /> : null} */}
    </div>
  );
};

export default Cart;
