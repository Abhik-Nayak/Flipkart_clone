const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
        trim: true
    },
    slug:{
        type: "string",
        required: true,
        unique: true
    },
    price: {
        type: "Number",
        required: true
    },
    description: {
        type: "String",
        required: true,
        trim: true
    },
    offer: { type: Number},
    productPictures: [
        { img: { type: String}}
    ],
    reviews: [
        {
            userId: mongoose.Schema.Types.ObjectId,ref: 'User',
            review: String
        }
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category"},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);