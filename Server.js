require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 3000;
const ProductRoute = require('./Routes/ProductRoute');

const app = express();
app.use(cors());

const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());
//routes

app.use("/api/product", ProductRoute);

app.get("/", (req, res) => {
  res.send("hello nodeji");
});

app.get("/create", (req, res) => {
  res.send("hello nodeji create");
});

// Create data



mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("mongodb is connected");
    app.listen(port, () => {
      console.log(`node is running on ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
