const Product = require("../../Models/productSchemas");

updateCustomerHandler = async (req, res) => {
  try {
    let name = req.body.productId;
    let existingProduct = await Product.findOne({ productId: name });

    if(!existingProduct) return res.status(404).json({ message: "Customer not found" });

    existingProduct = await Product.updateOne({ productId: name},req.body)
    let productDetails = await Product.findOne({ productId: name});
    res.json({productDetails,message:"updated successfully"});

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = updateCustomerHandler;
