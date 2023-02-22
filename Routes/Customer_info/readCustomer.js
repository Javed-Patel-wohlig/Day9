const mongoose = require("../../Config/config");
const readCustomerHandler = require("../../Controller/Customer_info/readCustomer");
const router = require("express").Router();

router.get("/", readCustomerHandler);

module.exports = router;
