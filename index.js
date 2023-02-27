const express = require("express");
const mongoose = require("./Config/config");

const customer_create_router = require("./Routes/Customer_info/createCustomer");
const customer_read_router = require("./Routes/Customer_info/readCustomer");
const customer_update_router = require("./Routes/Customer_info/updateCustomer");
const customer_delete_router = require("./Routes/Customer_info/deleteCustomer");

const product_create_router = require("./Routes/Product_info/createProduct");
const product_read_router = require("./Routes/Product_info/readProduct");
const product_update_router = require("./Routes/Product_info/updateProduct");
const product_delete_router = require("./Routes/Product_info/deleteProduct");

const many_customers_router = require("./Routes/manyCustomer");
const pagination_router = require("./Routes/pagination");
const order_router = require("./Routes/createOrder");
const payment_router = require("./Routes/createPayment");
// const populate = require("./Controller/populate")
// const search = require("./Controller/searchCustomer")
// const pagination_customer_keyword = require("./Controller/pagination_customer_keyword");
const Order_detail_router = require("./Routes/orderDetail");
const Payment_detail_router = require("./Routes/paymentDetail");
const recursive1_router = require("./Routes/recursive1");
const recursive2_router = require("./Routes/recursive2");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/customer/create", customer_create_router);
app.use("/customer/read", customer_read_router);
app.use("/customer/update", customer_update_router);
app.use("/customer/delete", customer_delete_router);

app.use("/product/create", product_create_router);
app.use("/product/read", product_read_router);
app.use("/product/update", product_update_router);
app.use("/product/delete", product_delete_router);

app.use("/manyCustomer", many_customers_router);

app.use("/customer/pagination", pagination_router);

app.use("/recursive1", recursive1_router);
app.use("/recursive2", recursive2_router);

app.use("/order/create", order_router);
app.use("/order/detail", Order_detail_router);
app.use("/payment/create", payment_router);
app.use("/payment/detail", Order_detail_router);

app.listen(port, () => console.log(`Server is running on ${port}........ `));
