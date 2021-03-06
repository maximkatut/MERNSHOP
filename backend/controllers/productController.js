import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc fetch all products
// @route GET api/products
// @acess public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).select(
    "_id name image rating numReviews price"
  );
  res.json(products);
});

// @desc fetch single product
// @route GET api/products/:id
// @acess public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProductById, getProducts };
