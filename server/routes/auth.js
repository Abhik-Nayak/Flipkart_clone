const express = require("express");
const router = express.Router();
const {userSignup } = require('../controller/user');

router.post("/userSignup",userSignup);

module.exports = router;