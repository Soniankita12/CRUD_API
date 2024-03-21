const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Model/ProductModel");
const cors =require("cors");
const port =process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello nodeji");
});

app.get("/create", (req, res) => {
  res.send("hello nodeji create");
});

// Create data

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Read data (all data);

app.get("/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Read data by id

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update data

app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "No product found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Delete data

app.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product)
    {
      return res.status(404).json({message:"Can't find any product assosiated with this id"});
    }
  res.status(200).json(product);
  } catch (error) {
    console.log(erroe.message);
    res.status(500).json({message:error.message});
  }
});

app.listen(port, () => {
  console.log("node is running");
});


mongoose
  .connect(
    "mongodb+srv://Ankita:Ankita@cluster0.6lbx3ge.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((error) => {
    console.log(error);
  });
