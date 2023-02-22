const mongoose = require("mongoose");
const customer = require("./customerSchema");

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  colors: [
    String
  ],
  size: [
      String,
     ],
  material: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
});

module.exports = mongoose.model("Product", productSchema);
