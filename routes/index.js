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
    console.log(req.session);
    var errMessages = req.flash("error");
    console.log(errMessages);
    res.render("user/register", {errMessages: errMessages});
});

router.post("/user/register", passport.authenticate("local.signup", {
    failureRedirect: "/user/register",
    failureFlash: true
}), function(req, res){
    req.flash("success", "Signed up successfully!");
    res.redirect("/user/profile");
});

router.get("/user/profile", function(req, res){
    console.log(req.session);
    res.render("user/profile");
});

module.exports = router;