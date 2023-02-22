const mongoose = require("../../Config/config");
const productHandler = require('../../Controller/Product_info/createProduct');
const router = require("express").Router();

router.post("/", productHandler);

module.exports = router;
