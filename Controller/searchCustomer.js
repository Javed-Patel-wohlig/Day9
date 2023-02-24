const Customer = require('../Models/customerSchema')

const keyword = 'osama' // replace with the keyword you want to search for

Customer.find({ name: { $regex: keyword, $options: 'i' } }, (err, customers) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(customers)
})
