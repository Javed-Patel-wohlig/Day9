const mongoose = require("../Config/config");
const manyCustomerHandler = require("../Controller/manyCustomer");
const router = require("express").Router();

router.post("/", manyCustomerHandler);

module.exports = router;
