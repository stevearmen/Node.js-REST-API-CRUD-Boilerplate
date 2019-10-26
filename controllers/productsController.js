const products = require('../classes/products');

// get a product (GET)
exports.get_product = function(req, res) {
    if (typeof req.params.sku === 'undefined')
    {
        throw('Missing SKU');
    }
    let prod = new products();
    prod.get_one(req.params.sku).then((product) => res.status(200).json(product)).catch((err) => {
        throw(err);
    });
};

// store a product (POST)
exports.store_product = function(req, res) {
    let prod = new products();
    prod.store(req.body).then((result) => res.sendStatus(200)).catch((err) => {
        throw(err);
    });
};

// update a product (PUT)
exports.replace_product = function(req, res) {
    if (typeof req.params.sku === 'undefined')
    {
        throw('Missing SKU');
    }
    let prod = new products();
    prod.update(req.params.sku, req.body).then((count) => res.status(200).json({ modified: count })).catch((err) => {
        throw(err);
    });
};

// delete a product (DELETE)
exports.delete_product = function(req, res) {
    if (typeof req.params.sku === 'undefined')
    {
        throw('Missing SKU');
    }
    let prod = new products();
    prod.delete_one(req.params.sku).then((result) => res.sendStatus(200)).catch((err) => {
        throw(err);
    });
};