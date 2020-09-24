import express from "express";
import { config } from "dotenv";

import products from "./data/products.js";

config();

const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server's running in ${MODE} mode on port ${PORT}`)
);
