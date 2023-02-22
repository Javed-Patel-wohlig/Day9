const Product = require("../../Models/productSchemas");
deleteProductHandler = async (req, res) => {
  try {
    let name = req.body.productId;
    let existingProduct = await Product.findOne({ productId: name });

    if (!existingProduct)
      return res.status(404).json({ message: "Product not found" });

    await Product.deleteOne({ productId: name });
    res.json({existingProduct, message: "deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = deleteProductHandler;
