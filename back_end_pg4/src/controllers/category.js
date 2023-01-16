require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const router = express.Router();
var typeorm = require('typeorm');
const connection = require('../server')
const Post = require('../post')
const bcrypt = require('bcryptjs');
const posts_table = "posts";

router.use(bodyParser.json())


router.get('/login', async (req, res) => {
    const connection = typeorm.getConnection();

    var result = await connection.getRepository(posts_table)
        .createQueryBuilder().getMany();
    res.status(200).json({
        "Message": "Working",
        result
    })
})

module.exports = router;