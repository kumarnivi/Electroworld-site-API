const mongoose = require('mongoose');

const orederSchema = new mongoose.Schema( {
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
})

const orderModel = mongoose.model('Order',orederSchema);
module.exports = orderModel;