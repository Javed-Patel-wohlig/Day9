const mongoose = require("../../Config/config");
const customerHandler = require("../../Controller/Customer_info/createCustomer");
const router = require("express").Router();

router.post("/", customerHandler);

module.exports = router;
