const Customer = require("../../Models/customerSchema");
deleteCustomerHandler = async (req, res) => {
  try {
    let name = req.body.email;
    let existingCustomer = await Customer.findOne({ email: name });

    if (!existingCustomer)
      return res.status(404).json({ message: "Customer not found" });

    await Customer.deleteOne({ email: name });
    res.json({ existingCustomer, message: "deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = deleteCustomerHandler;
