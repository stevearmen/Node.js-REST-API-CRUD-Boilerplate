const express = require('express');
const router = express.Router();

// runs before any route and authenticates
router.use((req, res, next) => {
    global.auth.authenticate(req).then(() => {
        next();
    }).catch((err_str) => {
        let err = new Error(err_str);
        err.statusCode = global.auth.status_code;
        next(err);
    });
});

// the index page
router.get('/', () => {
    res.send(200).json({msg: 'Hello'});
});

module.exports = router;