// import express from 'express';
const express = require('express');
const {check} = require('express-validator');
const {signup,signin} = require('../controllers/auth');
// const {validateReuest, isRequestValidated} = require('../validators/auth');
const router = express.Router();


router.post('/signup',signup);
router.post('/signin',signin);


module.exports = router;