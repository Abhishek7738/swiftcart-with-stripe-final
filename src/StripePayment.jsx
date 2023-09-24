import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./StripePayment.css"; // Import your CSS file

const StripePayment = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0); // State for payment amount
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State for success message

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const { token, error } = await stripe.createToken(
  //     elements.getElement(CardElement)
  //   );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error);
      setLoading(false);
    } else {
      // Send the token and payment amount to your server for payment processing
      fetch("/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: paymentAmount * 100, // Convert to cents (Stripe expects amounts in cents)
          token: token.id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.success) {
            setPaymentSuccess(true); // Set payment success state
            onPaymentSuccess(data);
          } else {
            // Handle payment failure
          }
        });
    }
  };

  return (
    <div className="form-box">

        <div className="stripe-form">
      {/* Input field for payment amount */}
      {/* <input
        type="number"
        placeholder="Enter amount"
        value={paymentAmount}
        onChange={(e) => {
          const enteredValue = parseFloat(e.target.value);
          if (!isNaN(enteredValue)) {
            // Set a lower limit (e.g., 1) and an upper limit (e.g., 1000) for the amount
            if (enteredValue >= 1 && enteredValue <= 10) {
              setPaymentAmount(enteredValue);
            }
          }
        }}
        className="payment-amount-input"
        min="1" // Set the minimum allowed value
        max="1000" // Set the maximum allowed value
      /> */}

      <CardElement className="card-element" />
      <button
        type="submit"
        className="pay-button"
        onClick={handleSubmit}
        disabled={!stripe || loading}>
        Pay
      </button>
      {paymentSuccess && (
        <div className="success-message">Payment successful!</div>
      )}
    </div>
        
    </div>
    
  );
};

export default StripePayment;
