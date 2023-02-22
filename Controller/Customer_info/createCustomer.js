const Customer = require("../../Models/customerSchema");
const _ = require("lodash");

customerHandler = async (req, res) => {
  try {
    let name = req.body.email;
    const existingProduct = await Customer.findOne({ email: name });

    if (existingProduct)
      return res.status(409).json({ message: "Customer already exists" });

    let customer = new Customer(req.body);
    customer = await customer.save();
    res.send(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = customerHandler;
