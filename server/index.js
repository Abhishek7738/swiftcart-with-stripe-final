const express = require('express');
const stripe = require('stripe')('sk_test_51NpSmWSGVxMTh93KxxgQ4tCK19d5xIe97OjMB8oHzRXCyZLO8Z7OhKWbd647eK22eOSE9LtwKwckEpMnVnY1YOk600FjppcZeC'); // Replace 'your-secret-key' with your actual Stripe secret key
const app = express();
const port = 3001; // Choose the port you want to run your server on

// Define a route to handle payments
app.post('/process-payment', async (req, res) => {
  const { amount, token } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'inr', // Adjust as needed for your currency
      payment_method_types: ['card'],
      payment_method: token,
    });

    // Handle successful payment, update database, send email confirmation, etc.
    res.json({ success: true, message: 'Payment succeeded' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Payment failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
