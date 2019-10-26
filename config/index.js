const config = require('./config.json');
const environment = process.env.NODE_ENV || 'dev';
global.gconf = config[environment];