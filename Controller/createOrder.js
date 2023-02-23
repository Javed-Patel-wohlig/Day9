const Order = require("../Models/orderSchemas");

orderHandler = async (req, res) => {
  try {
    let name = req.body.payId;
    const existingOrder = await Order.findOne({ payId: name });

    if (existingOrder && existingOrder.product === req.body.product) {
      const newQuantity =
        Number(existingOrder.quantity) + Number(req.body.quantity);
      await Order.findOneAndUpdate(
        { payId: name },
        { quantity: newQuantity, o_date_time: Date.now() }
      );
      const updatedOrderDetails = await Order.findOne({ payId: name });
      return res
        .status(200)
        .json({
          updatedOrderDetails,
          message: `Quantity updated to ${newQuantity}`,
        });
    }

    let one = Number(req.body.amount);
    let two = Number(req.body.tax);
    let total = one + two;

    req.body.total = Number(total);

    let order = new Order(req.body);
    order = await order.save();
    res.send(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = orderHandler;
