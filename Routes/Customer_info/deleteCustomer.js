const mongoose = require("../../Config/config");
const deleteCustomerHandler = require("../../Controller/Customer_info/deleteCustomer");
const router = require("express").Router();

router.delete("/", deleteCustomerHandler);

module.exports = router;
