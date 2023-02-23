const Payment = require("../Models/paymentSchemas");

paymentHandler = async (req, res) => {
  try {
    let name = req.body.pay_status;

    if (!name) return res.status(409).json({ message: "payment not made yet" });

    let one = Number(req.body.amount);
    let two = Number(req.body.tax);
    let total = one + two;
    req.body.total = total;
    
    let payment = new Payment(req.body);
    payment = await payment.save();

    res.send(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = paymentHandler;
