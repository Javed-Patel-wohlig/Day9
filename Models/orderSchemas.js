const mongoose = require("mongoose");
const customer = require("./customerSchema");
const product = require("./productSchemas");

const orderSchema = new mongoose.Schema({
  Product:{type: mongoose.Schema.Types.ObjectId, ref: "Product"},
  
  customer: {type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
  payid:{
      type: String,
      required:true
  },
  o_date_time:{
      type: Date,
      default: Date.now,
  },
  deliveryStatus:{
      type: Boolean,
      default: false,
      required:true
  },
  quantity:{
      type: Number,
      required: true,
  },
  colors:[{
      type: String,
      required: true,
  }], 
  size:[{
      type: String,
      required: true,
  }],
  amount:{
      type: Number,
      required: true,
  },
  total:{
      type: Number,
      required: true,
  },
  tax:{
      type: Number,
      required: true,
  }

});

orderSchema.pre("save", function (next) {
    if (!this.o_date_time) {
      this.o_date_time = new Date();
    }
    next();
  });

module.exports = mongoose.model("Order", orderSchema);
