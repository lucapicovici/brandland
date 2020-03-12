var express        = require("express"),
    Product        = require("../models/product.js"),
    router         = express.Router();
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

router.get("/register", function(req, res){
    res.render("register", {csrfToken: req.csrfToken()});
});

router.post("/register", function(req, res){
    res.redirect("/");
});

module.exports = router;