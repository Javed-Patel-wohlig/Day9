const mongoose = require('../conn/config')
const Order = require('../schema/orderSchema')
const _ = require('lodash')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try{

        let name = req.body.name;
        const existingProduct = await Order.findOne({ name: name });
    
        if (existingProduct)
          return res.status(409).json({ message: "Order already exists" });
    
        const order = new Order(_.pick(req.body, ['name', 'product', 'price']))
        await order.save();
    }catch(err){
        console.log(err)
    }
})

module.exports = router

