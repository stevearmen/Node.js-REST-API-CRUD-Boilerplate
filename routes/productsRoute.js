const express = require('express');
const router = express.Router();

const products_controller = require('../controllers/productsController');

router.get('/:sku', products_controller.get_product);

router.post('/', products_controller.store_product);

router.put('/:sku', products_controller.replace_product);

router.delete('/:sku', products_controller.delete_product);

module.exports = router;