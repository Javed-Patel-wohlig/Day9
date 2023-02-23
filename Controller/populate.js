const Product = require('../Models/productSchemas')

Product.findOne({ name: 'Redmi 10' })
  .populate('categories')
  .exec((err, product) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(product);
  });