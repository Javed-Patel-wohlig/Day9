const mongoose = require('../conn/config')
const Product = require('../schema/productSchema')
const _ = require('lodash')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try{
        
        let name = req.body.name;
        const existingProduct = await Product.findOne({ name: name });
    
        if (existingProduct)
          return res.status(409).json({ message: "Product already exists" });
    
        const product = new Product(_.pick(req.body, ['name', 'description', 'price']))
        await product.save();
    }catch(err){
        console.log(err)
    }
})

module.exports = router

