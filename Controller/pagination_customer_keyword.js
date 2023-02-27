const Customer = require('../Models/customerSchema')

const searchCustomers = async (keyword, pageNumber, pageSize) => {
  const skip = (pageNumber - 1) * pageSize;

  const customers = await Customer.find({
    name: { $regex: keyword, $options: "i" },
  })
    .skip(skip)
    .limit(pageSize);

  const totalCustomers = await Customer.countDocuments({
    name: { $regex: keyword, $options: "i" },
  });

  const totalPages = Math.ceil(totalCustomers / pageSize);

  return {
    customers,
    totalCustomers,
    totalPages,
  };
};

searchCustomers("", 3, 10)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
