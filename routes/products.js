const productsController = require('../controllers/products')
const express = require('express')
const router = express.Router()

router.get('/(products)', productsController.getAllProducts)

module.exports = router