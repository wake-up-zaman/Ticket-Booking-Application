const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app = express()
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const busesRoute=require("./routes/buses.js")
const bookingRoute=require("./routes/booking.js")
const usersRoute=require('./routes/users.js')
const reviewsRoute=require("./routes/reviews.js")
const seatsRoute=require('./routes/seats.js')
const paymentRoute=require('./routes/payment.js')
const port = process.env.PORT || 8800;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoose ticket kato pro");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected",()=>{
  console.log("mongoDB connected !")
})

mongoose.connection.on("disconnected",()=>{
  console.log("mongoDB disconnected !")
})

//middleWires
app.use(cors())
app.use(express.json())
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use("/buses",busesRoute);
app.use("/booking",bookingRoute);
app.use("/users",usersRoute);
app.use("/reviews",reviewsRoute);
app.use("/seats", seatsRoute);


app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500
  const errorMessage=err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})


app.get("/",(req,res)=>{
  res.send("Hello From Ticket-Kato Pro")
})


app.listen(port, () => {
  connect();
  console.log("Connected to backend 8800.");
});