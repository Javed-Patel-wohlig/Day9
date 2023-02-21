const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {type: 'string', min: 5,required: true},
  email: {
    type: 'string',
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: props => `${props.value} is not a valid email address.`
    }
  },
  password: {
    type: 'string',
    required: true,
    validate: {
      validator: function(value) {
        // password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return passwordRegex.test(value);
      },
      message: props => `${props.value} is not a valid password! Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.`
    }
  },
  createdAt: { type: Date, default: Date.now },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

module.exports = mongoose.model('Customer', customerSchema);
