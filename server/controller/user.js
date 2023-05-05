const User = require("../models/user");

exports.userSignup = async(req,res) =>{
    try{
        const user = req.body;
        console.log(user)
        const newUser = new User();
        await newUser.save();

        res.status(200).json({message: user})
    }
    catch(err){
        console.log(err)

    }
}