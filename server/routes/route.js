const express = require("express");
const router = express.Router();
const {userSignup } = require('../controller/user');

router.post("/userSignup",userSignup);


router.post("/products", )

module.exports = router;