const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware/index');
const { createProduct } = require('../controllers/product');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/product/create', requireSignin, /*adminMiddleware,*/upload.array('productPicture'), createProduct);
// router.get('/category/getcategory',getCategories);

module.exports = router;
