const mongoose = require("../Config/config");
const Order = require("../Models/orderSchemas");
const Customer  = require("../Models/customerSchema")
const product = require("../Models/productSchemas")
const router = require("express").Router();


router.get('/', async(req, res) => {
try{
Order.findOne({ _if: '63f8a5c40c4632e7c80e1d46' })
  .populate('product')
  .populate('customer')
  .exec((err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(result);
    console.log(result);
  });
}catch(err){
    console.log(err.message);
}
})

module.exports = router;
