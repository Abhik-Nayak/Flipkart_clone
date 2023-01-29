const express = require('express');
const {addItemToCart} = require("../controllers/cart");
const {requireSignin, userMiddleware} = require('../common-middleware');
const router = express.Router();

router.post("/user/cart/addtocart",requireSignin, addItemToCart);

module.exports = router ;