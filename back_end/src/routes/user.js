import express from 'express';
const router = express.Router();

// Models
import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min:3,
        max:20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 3
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    contactNumber: { type: String },
    profilePicture: { type: String}
}, { timestamps: true});

userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compare(password, this.hash_password)
    }
}

const User = mongoose.model('User',userSchema);

// data base model end here

// Router start here
router.post('/signin', (req, res) =>{


});
router.get('/', (req,res) => {
    res.status(200).json({
        message: "hello got it"
    })
})

router.post('/signup', (req, res) =>{
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if (user) return res.status(400).json({
            message: "User already registered"
        });

        const {
            firstName,
            lastname,
            email,
            password
        } = req.body;
        const _user = new User({ firstName, lastname, email, password, username: Math.random().toString() });
        
        _user.save((error, data) =>{
            if(error){
                return res.status(400).json({
                    message: "Something went wrong"
                });
            }

            if(data){
                return res.status(201).json({
                    user: data
                })
            }
        })
    
    })
});


export default router;