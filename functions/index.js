const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HbwVCBCCtmPpw4AXY1Gh9lkGD3986H27qgZ7Ndi6meIL1hEPdhZOkxNgQV8ztjNkZGNVdfOQ9TnkxLBnbS0CdKu00DRluDq6f"
);

//APi

// - app config
const app = express();

//--Middleware
app.use(cors({ origin: true }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//-API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment received>>>>>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command
exports.api = functions.https.onRequest(app);

//example endpoint
// http://localhost:5001/challenge-c5837/us-central1/api
