const mongoose = require('mongoose');
const ApiKeys = require('../models/api_keysModel');

mongoose.set('useCreateIndex', true);

class api_keys {

    constructor(){

    }

    get_one(api_key) {
        return new Promise((resolve, reject) => {
            ApiKeys.findOne({api_key: api_key}, (err, doc) => {
                if (err) reject(err); else resolve(doc);
            });
        });
    }
}
module.exports = api_keys;