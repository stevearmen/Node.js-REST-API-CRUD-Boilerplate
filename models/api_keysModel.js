const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ApiKeysSchema = new Schema({
    userID: {type: mongoose.Schema.Types.ObjectId},
    api_key: {type: String, required: true}
});

module.exports = mongoose.model('ApiKeys', ApiKeysSchema, 'api_keys');