const express = require('express');
const {requireSignin, adminMiddleware} = require('../common-middleware/index');
const {addProduct} = require('../controllers/product');
const router = express.Router();

router.post('/product/create',requireSignin,adminMiddleware,addProduct);
// router.get('/category/getcategory',getCategories);

module.exports= router;
