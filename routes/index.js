var express        = require("express"),
    Product        = require("../models/product.js"),
    router         = express.Router(),
    passport       = require("passport"),
    csrf           = require("csurf"),
    csrfProtection = csrf();

router.use(csrfProtection);

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
    res.render("user/register", {csrfToken: req.csrfToken()});
});

router.post("/user/register", passport.authenticate({
    successRedirect: "/user/profile",
    failureRedirect: "/user/register",
    failureFlash: true
}));

router.get("/user/profile", function(req, res){
    res.render("user/profile");
});

module.exports = router;