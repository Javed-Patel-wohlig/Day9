const mongoose = require("mongoose");
const customerSchema = require("./customerSchema");
const productSchema = require("./productSchema");

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },

  name: { type: "string", minlength: 5, required: true },
  product: { type: "string", minlength: 5, required: true },
  price: { type: "number", min: 100, required: true },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
