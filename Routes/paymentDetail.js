const mongoose = require("../Config/config");
const Payment = require("../Models/paymentSchemas");
const router = require("express").Router();


router.get('/', async(req, res) => {
try{
Payment.findOne({ pay_status: 'true' })
  .populate('customer')
  .populate('order')
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
