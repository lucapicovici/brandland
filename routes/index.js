var express        = require("express"),
    Product        = require("../models/product.js"),
    Cart           = require("../models/cart.js"),
    router         = express.Router(),
    passport       = require("passport");

router.get("/", function(req, res){
    Product.find({}, function(err, foundProducts){
        if (err) {
            console.log(err);
        } else {
            res.render("index", {products: foundProducts});
        }
    });
    console.log(req.session);
});

router.get("/add-to-cart/:id", function(req, res){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

    Product.findById(productId, function(err, product){
        if (err) {
            return res.redirect("/");
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session);
        res.redirect("/");
    });
});

router.get("/shopping-cart", function(req, res){
    if (req.session.cart.totalQty == 0) {
        return res.render("shop/shopping-cart", {products: null});
    }
    var cart = new Cart(req.session.cart);
    return res.render("shop/shopping-cart", {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = router;