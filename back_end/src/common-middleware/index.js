const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
    // const token = req.headers.authorization;
    // console.log(token);
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log(user);
        req.user = user;
    }
    else {
        return res.status(400).json({ message: 'Authorization required' })
    }
    next();
}

exports.userMiddleware = (req, res, next) => {
    console.log(req.user);
    if (req.user.role !== 'user') {
        return res.status(400).json({ message: "User Access denied" })
    }
    next();

}

exports.adminMiddleware = (req, res, next) => {
    console.log(req.user);
    console.log(req.user.role);
    if (req.user.role !== 'admin') {
        return res.status(400).json({ message: "Access denied" })
    }
    next();
}