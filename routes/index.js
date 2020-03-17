var express        = require("express"),
    Product        = require("../models/product.js"),
    Cart           = require("../models/cart.js"),
    Order          = require("../models/order.js"),
    router         = express.Router(),
    passport       = require("passport");

router.get("/", function(req, res){
    Product.find({}, function(err, foundProducts){
        if (err) {
            console.log(err);
        } else {
            res.render("index", {products: foundProducts, successMessages: req.flash("success")});
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

router.post("/checkout", isLoggedIn, function(req, res){
    if (req.session.cart.totalQty == 0) {
        return res.redirect("/shopping-cart");
    }
    var cart = new Cart(req.session.cart);

    var order = new Order({
        user: req.user,
        cart: cart
    });
    order.save(function(err, result){
        // After successful checkout
        req.flash("success", "Order has been placed successfully.");
        req.session.cart = null;
        res.redirect("/");
    });

});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/user/login");
};

module.exports = router;