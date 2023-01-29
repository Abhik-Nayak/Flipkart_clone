const Cart = require('../models/cart');

exports.addItemToCart = (req, res) =>{
    const categoryObj = {user: req.user._id,cartItems: req.body.cartItems}
    const cart = new Cart(categoryObj);
    console.log(categoryObj);
    cart.save((error, cart)=> {
        if(error) return res.status(400).json({error});
        if(cart){
            return res.status(201).json({ cart });
        }
    });
}