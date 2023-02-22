const Payment = require("../Models/paymentSchemas");
const _ = require("lodash");

paymentHandler = async (req, res) => {
  try {
    let name = req.body.pay_status;

    if (!name)
      return res.status(409).json({ message: "payment not made yet" });

    let payment = new Payment(req.body);
    payment = await Payment.save();
    res.send(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = paymentHandler;
