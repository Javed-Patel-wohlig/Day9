const mongoose = require("../Config/config");
const Order = require("../Models/orderSchemas");
const router = require("express").Router();


router.get('/', async(req, res) => {
try{
Order.findOne({ payId: '1' })
  .populate('product customer')
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
