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

module.exports = router;