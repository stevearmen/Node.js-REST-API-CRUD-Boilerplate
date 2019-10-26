const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductsSchema = new Schema({
    SKU: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    currency: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Products', ProductsSchema, 'products');