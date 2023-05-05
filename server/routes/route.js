const express = require("express");
const router = express.Router();
const {userSignup } = require('../controller/user');

router.post("/signup",userSignup);


router.post("/products", )

module.exports = router;