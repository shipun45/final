const mongoose = require("mongoose");
const ratingSchema = require("./rating");

const productSchema = mongoose.Schema({
 
  title: {
    type: String,
    // required: true,
  },

  img1: {
    type: String,
    // required: true,
  },
  img2: {
    type: String,
    // required: true,
  },
  img3: {
    type: String,
    // required: true,
  },
  img4: {
    type: String,
    // required: true,
  },
  img5: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product, productSchema };
