const Customer = require("../../Models/customerSchema");

readCustomerHandler = async (req, res) => {
  try {
    const result = await Customer.find();
    res.send(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = readCustomerHandler;
