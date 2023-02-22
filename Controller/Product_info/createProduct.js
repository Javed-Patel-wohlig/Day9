const Product = require("../../Models/productSchemas");

productHandler = async (req, res) => {
  try {
    let name = req.body.productId;
    const existingProduct = await Product.findOne({ productId: name });

    if (existingProduct)
      return res.status(409).json({ message: "Product already exists" });

    let product = new Product(req.body);
    product = await product.save();
    res.send(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = productHandler;
