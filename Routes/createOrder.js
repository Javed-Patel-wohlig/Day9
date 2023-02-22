const mongoose = require("../Config/config");
const orderHandler = require('../Controller/createOrder')
const router = require("express").Router();

router.post("/", orderHandler);

module.exports = router;
