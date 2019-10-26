process.env.NODE_ENV = 'dev';
const config = require('./config');

const express = require('express');
const Database = require('./classes/database');
const Auth = require('./classes/auth');

const index_route = require('./routes/indexRoute');
const products_route = require('./routes/productsRoute');
const error_handler = require('./middleware/errors');

const app = express();

app.use(express.json());
app.use('/', index_route);
app.use('/product', products_route);
app.use(error_handler.clientErrorHandler);
app.use(error_handler.errorHandler);

global.db = new Database();
global.auth = new Auth();

global.db.open().then(() => {
    app.listen(global.gconf.port, () => {
        console.log('Server is up and running on port ' + global.gconf.port);
    });
})
.catch((error) => {
    console.log('DB connection error:  ' + error);
});