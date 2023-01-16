const express = require('express');
const {requireSignin, adminMiddleware} = require('../common-middleware/index');
const { getCategories} = require('../controllers/category');
const router = express.Router();

router.get('/category/getcategory',getCategories);