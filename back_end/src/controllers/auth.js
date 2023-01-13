const User = require("../models/user");
const jwt = require("jsonwebtoken");
const {validationResult} = require('express-validator');

exports.getData = async (req, res) => {
    try {
        const postMessages = await User.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.signup = (req, res) => {
    
    console.log(req.body);
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: "User already registered"
            });

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            });

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: "Something went wrong"
                    });
                }

                if (data) {
                    return res.status(201).json({
                        user: data
                    })
                }
            })

        })
};

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({ error });
            }
            if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
                    const { _id,firstName, lastName, email, role, fullName } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id,firstName, lastName, email, role, fullName
                        }
                    })
                }else{
                    return res.status(400).json({
                        message: "Invalid email or password"
                    })

                }
            } else {
                return res.status(400).json({
                    message: "Something went wrong"
                });
            }
        })
}

exports.requireSignin = (req, res, next)=> {
    // const token = req.headers.authorization;
    // console.log(token);
    const token =req.headers.authorization.split(" ")[1];
    console.log(token);
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
}