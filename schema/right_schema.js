const mongoose = required("mongoose");

const Product = new mongoose.Schema({
    category:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    colors:[{
        type: String,
        required: true,
    }], 
    size:[{
        type: String,
        required: true,
    }],
    material:{
        type: String,
        required: true,
    },
    product_detail:{
        type: String,
        required: true,
    }
});

const Order = new mongoose.Schema({
    // Product:{type: mongoose.Schema.Types.ObjectId, ref: "Product"},
    productid:{
        type: String,
        required:true
    },
    // customer: {type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
    customerid:{
        type: String,
        required:true
    },
    payid:{
        type: String,
        required:true
    },
    o_date_time:{
        type: Date,
        default: Date.now,
        required:true
    },
    deliveryStatus:{
        type: Boolean,
        default: false,
        required:true
    },
    quantity:{
        type: Number,
        required: true,
    },
    colors:[{
        type: String,
        required: true,
    }], 
    size:[{
        type: String,
        required: true,
    }],
    amount:{
        type: Number,
        required: true,
    },
    total:{
        type: Number,
        required: true,
    },
    tax:{
        type: Number,
        required: true,
    }

});

const customer = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
          },
          message: (props) => `${props.value} is not a valid email address.`,
        },
    },
    dob:{
        type: String,
        required: true,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
          const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
          return passwordRegex.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid password! Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.`,
      },
    },
    address:{
        type: String,
        required: true,
    }
});

const Payment = new mongoose.Schema({
    amount:{
        type: Number,
        required: true,
    },
    pay_type:{
        type: String,
        required: true,
    },
    pay_status:{
        type: Boolean,
        required: true,
    },
    // Order:{type: mongoose.Schema.Types.ObjectId, ref: "Order"},
    orderid:{
        type: String,
        required: true,
    },
    // customer:{type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
    customerid:{
        type: String,
        required: true,
    },
    pay_date_time:{
        type: Date,
        default: Date.now,
        required: true,
    },
    total:{
        type: Number,
        required: true,
    },
    tax:{
        type: Number,
        required: true,
    }
});