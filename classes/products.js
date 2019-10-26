const mongoose = require('mongoose');
const Products = require('../models/productsModel');

mongoose.set('useCreateIndex', true);

class products {

    constructor(){
    }

    get_one(sku){
        return new Promise((resolve, reject) => {
            Products.findOne({SKU: sku}, (err, doc) => {
                if (err) reject(err); else resolve(doc);
            });
        });
    }

    store(document){
        return new Promise((resolve, reject) => {
            let product = new Products(document);
            product.save(document, function(err, res) {
                if (err) reject(err); else resolve(true);
            });
        });
    }

    update(sku, document){
        return new Promise((resolve, reject) => {
            //let product = new Products(document);
            Products.updateOne({'SKU': sku}, document, function(err, res) {
                if (err) reject(err); else resolve(res.nModified);
            });
        });
    }

    delete_one(sku){
        return new Promise((resolve, reject) => {
            Products.deleteOne({SKU: sku}, (err, doc) => {
                if (err) reject(err); else resolve(true);
            });
        });
    }

}
module.exports = products;