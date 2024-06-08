const express = require("express");
const router = express.Router();
const Product = require("../Model/ProductModel");
const {
  CreateProduct,
  GetProduct,
  GetProductById,
  UpdateProduct,
  DeleteProduct,
} = require("../Controller/ProductControler");

router.post("/", CreateProduct);

//Read data (all data);

router.get("/", GetProduct);

// Read data by id

router.get("/:id", GetProductById);

//update data

router.put("/:id", UpdateProduct);

//Delete data

router.delete("/:id", DeleteProduct);

module.exports = router;
