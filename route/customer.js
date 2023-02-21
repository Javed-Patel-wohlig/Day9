const mongoose = require('../conn/config')
const Customer = require('../schema/customerSchema')
const _ = require('lodash')
const router = require('express').Router()


router.post('/', async (req, res) => {
    try{
        let name = req.body.name;
        const existingProduct = await Customer.findOne({ name: name });
    
        if (existingProduct)
          return res.status(409).json({ message: "Customer already exists" });
    
        const customer = new Customer(_.pick(req.body, ['name', 'email', 'password']))
        await customer.save();
    } catch (err) {
        console.log(err)
    }
})

module.exports = router

