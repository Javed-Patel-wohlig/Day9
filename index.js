const express = require('express');
const mongoose = require('./conn/config');
const customer_router = require('./route/customer');
const order_router = require('./route/order');
const product_router = require('./route/product');
const port = process.env.PORT || 3000;


const app = express();
app.use(express.json());
app.use('/customer', customer_router);
app.use('/order', order_router);
app.use('/product', product_router);


app.listen(port, () => console.log(`Server is running on ${port}........ `))










