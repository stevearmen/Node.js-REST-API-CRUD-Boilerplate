module.exports = {
    clientErrorHandler: (err, req, res, next) => {
        if (err.statusCode) {
            res.status(err.statusCode).send({ error: err.message })
        } else {
            next(err);
        }
    },
    errorHandler: (err, req, res, next) => {
        res.status(500).send({ error: err })
    }
}