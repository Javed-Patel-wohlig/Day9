const Customer = require("../../Models/customerSchema");

updateCustomerHandler = async (req, res) => {
  try {
    let name = req.body.email;
    let existingCustomer = await Customer.findOne({ email: name });

    if(!existingCustomer) return res.status(404).json({ message: "Customer not found" });

    existingCustomer = await Customer.updateOne({ email: name},req.body)
    let CustomerDetails = await Customer.findOne({ email: name});
    res.json({CustomerDetails,message:"updated successfully"});

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = updateCustomerHandler;
