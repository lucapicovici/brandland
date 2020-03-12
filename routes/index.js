var express        = require("express"),
    Product        = require("../models/product.js"),
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
});

router.get("/user/register", function(req, res){
    res.render("user/register");
});

router.post("/user/register", passport.authenticate("local.signup", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/register",
    failureFlash: true
}));

router.get("/user/profile", function(req, res){
    res.render("user/profile");
});

module.exports = router;