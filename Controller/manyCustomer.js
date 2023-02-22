const Customer = require("../Models/customerSchema");

manyCustomerHandler = async (req, res) => {
  try {
    const customers = req.body; 

    const existingCustomers = await Customer.find({ email: { $in: customers.map(c => c.email) } });
    if (existingCustomers.length > 0) {
      return res.status(409).json({ message: "Some of the customers already exist" });
    }

   // const customerDocs = customers.map(c => new Customer(c));

    const result = await Customer.insertMany(customers);

    res.send(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = manyCustomerHandler;
