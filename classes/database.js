const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

class Database {

    conn_str = 'mongodb://' + global.gconf.db.usr + ':' + global.gconf.db.pwd + '@' + global.gconf.db.host + '/' + global.gconf.db.collection;

    open() {
        let _self = this;
        return new Promise((resolve, reject) => {
            try {
                mongoose.connect(_self.conn_str, {useNewUrlParser: true});
            } catch (error) {
                reject(error);
            }
            let db = mongoose.connection;
            db.on('error', err => {
                reject(err);
            });
            db.once('open', () => {
                resolve();
            });
        });
    }

    close() {
        mongoose.disconnect();
    }
}
module.exports = Database;