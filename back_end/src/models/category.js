const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
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
    parentId: {
        type: "String",
    },
}, {timestamps: true});

module.exports = mongoose.model("Category", categorySchema);