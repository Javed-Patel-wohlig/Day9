const mongoose = require("../Config/config");
const paymentHandler = require('../Controller/createPayment')
const router = require("express").Router();

router.post("/", paymentHandler);

module.exports = router;
