const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HkDfnLJJdVn8iwzirNq0aP744BCGl0KXhohDI8P0EYbN3IFNlC8bCXYYxyW36ucd19cbKbogwfmDRBzXY8HNW0h008wQc5H2P"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request received for this amount: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK response, something was created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen
exports.api = functions.https.onRequest(app);
