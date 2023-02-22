const Order = require("../Models/orderSchemas");
const _ = require("lodash");

orderHandler = async (req, res) => {
  try {
    let name = req.body.payid;
    const existingOrder = await Order.findOne({ payid: name });
    console.log(existingOrder);
    if (existingOrder){
        const newQuantity = Number(existingOrder.quantity) + Number(req.body.quantity);
        const updatedOrder = await Order.findOneAndUpdate({ payid: name }, { quantity: newQuantity ,  o_date_time: Date.now() }, {new: true});
        return res.status(200).json({ updatedOrder, message: `Quantity updated to ${newQuantity}` });
    }
    
    let one =  Number(req.body.amount);
    let two =  Number(req.body.tax);
    console.log(one, two);

    let total = one + two;
    console.log(total);
    req.body.total = Number(total);
    let order = new Order(req.body);
    order = await order.save();
    res.send(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = orderHandler;
