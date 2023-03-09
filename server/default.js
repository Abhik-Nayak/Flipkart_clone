const products = require("./constants/product.js");
const Product = require("./models/product.js");


const DefaultData = async () => {
    try {
        await Product.insertMany(products.Array);
        // console.log(products.Array);
    } catch (err) {
        console.log(err)
    }
}

module.exports = DefaultData;