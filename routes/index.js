var express  = require("express"),
    router   = express.Router(),
    passport = require("passport");

var Cart            = require("../models/cart.js"),
    Order           = require("../models/order.js"),
    Laptop          = require("../models/laptop.js"),
    Laptop_Backpack = require("../models/laptop-backpack.js"),
    Laptop_Ram      = require("../models/laptop-ram.js");

router.get("/", function(req, res){
    res.render("index", {successMsg: req.flash("success")});
});

router.get("/laptop", function(req, res){
    Laptop.find({}, function(err, laptops){
        if (err) {
            console.log(err);
        } else {
            res.render("products/laptop/index", {laptops: laptops});
        }
    });
});

router.get("/laptop/:id", function(req, res){
    // Check if valid object id
    Laptop.findById(req.params.id, function(err, laptop){
        if (err || !laptop) {
            console.log(err);
            req.flash("error", "Product not found.");
            res.redirect("back");
        } else {
            res.render("products/laptop/show", {laptop: laptop});
        }
    });
});

router.get("/laptop-backpack", function(req, res){
    Laptop_Backpack.find({}, function(err, laptop_backpacks){
        if (err) {
            console.log(err);
        } else {
            res.render("products/laptop-backpack/index", {laptop_backpacks: laptop_backpacks});
        }
    });
});

router.get("/laptop-backpack/:id", function(req, res){
    // Check if valid object id
    Laptop_Backpack.findById(req.params.id, function(err, laptop_backpack){
        if (err || !laptop_backpack) {
            console.log(err);
            req.flash("error", "Product not found.");
            res.redirect("back");
        } else {
            res.render("products/laptop-backpack/show", {laptop_backpack: laptop_backpack});
        }
    });
});

router.get("/laptop-ram", function(req, res){
    Laptop_Ram.find({}, function(err, laptop_ram){
        if (err) {
            console.log(err);
        } else {
            res.render("products/laptop-ram/index", {laptop_ram: laptop_ram});
        }
    });
});

router.get("/laptop-ram/:id", function(req, res){
    // Check if valid object id
    Laptop_Ram.findById(req.params.id, function(err, laptop_ram){
        if (err || !laptop_ram) {
            console.log(err);
            req.flash("error", "Product not found.");
            res.redirect("back");
        } else {
            res.render("products/laptop-ram/show", {laptop_ram: laptop_ram});
        }
    });
});

// Shopping Cart

router.get("/add-to-cart/:type/:id", function(req, res){
    var type = req.params.type;
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

    switch(type) {
        case 'laptop':
            Laptop.findById(productId, function(err, laptop){
                if (err || !laptop) {
                    console.log(err);
                    req.flash("error", "Product not found.");
                    res.redirect("back");
                } else {
                    cart.add("laptop", laptop, laptop._id);
                    req.session.cart = cart;
                    console.log(req.session);
                    res.redirect("back");
                }
            });
            break;
        case 'laptop-backpack':
            Laptop_Backpack.findById(productId, function(err, laptop_backpack){
                if (err || !laptop_backpack) {
                    console.log(err);
                    req.flash("error", "Product not found.");
                    res.redirect("back");
                } else {
                    cart.add("laptop-backpack", laptop_backpack, laptop_backpack._id);
                    req.session.cart = cart;
                    console.log(req.session);
                    res.redirect("back");
                }
            });
            break;
        case 'laptop-ram':
            Laptop_Ram.findById(productId, function(err, laptop_ram){
                if (err || !laptop_ram) {
                    console.log(err);
                    req.flash("error", "Product not found.");
                    res.redirect("back");
                } else {
                    cart.add("laptop-ram", laptop_ram, laptop_ram._id);
                    req.session.cart = cart;
                    console.log(req.session);
                    res.redirect("back");
                }
            });
            break;
        default:
            console.log("DEFAULT: Product not found");
            req.flash("Product not found.");
            return res.redirect("back");
    }
});

router.get("/reduce/:id", function(req, res){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect("/shopping-cart");
});

router.get("/remove/:id", function(req, res){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect("/shopping-cart");
});

router.get("/shopping-cart", function(req, res){
    if (req.session.cart.totalQty == 0) {
        return res.render("shop/shopping-cart", {products: null});
    }
    var cart = new Cart(req.session.cart);
    return res.render("shop/shopping-cart", {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.post("/shopping-cart", isLoggedIn, function(req, res){
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
        res.redirect("back");
    });
});

router.get("/checkout", function(req, res){
    if (req.session.cart.totalQty == 0) {
        return res.redirect("/shopping-cart");
    }
    var cart = new Cart(req.session.cart);
    res.render("shop/checkout", {totalPrice: cart.totalPrice, errMsg: req.flash("error")});
});

router.post("/checkout", function(req, res){
    if (req.session.cart.totalQty == 0) {
        return res.redirect("/shopping-cart");
    }
    var cart = new Cart(req.session.cart);

    var stripe = require('stripe')('sk_test_51GyhSUBVEY9pRgXUHQ77nJ3EonwBUPmB2UM5nLvDZ0AsKOTGoLYYPXcNddcFSkQYvocpzN7FIKw7pTHHKlPmNW9I00nQwENkkt');

    // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
    stripe.charges.create(
    {
        amount: cart.totalPrice * 100,
        currency: 'usd',
        source: req.body.stripeToken,
        description: 'My First Test Charge',
    },
    function(err, charge) {
        // asynchronously called
        if (err) {
            req.flash("error", err.message);
            return res.redirect("/checkout");
        }
        req.flash("success", "Successfully bought product!");
        req.session.cart = null;
        res.redirect("/");
    }
    );
});

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect("/user/login");
};

module.exports = router;