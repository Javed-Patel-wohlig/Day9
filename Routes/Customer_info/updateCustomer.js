const mongoose = require("../../Config/config");
const updateCustomerHandler = require("../../Controller/Customer_info/updateCustomer");
const router = require("express").Router();

router.put("/", updateCustomerHandler);

module.exports = router;
