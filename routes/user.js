var express  = require("express"),
    router   = express.Router(),
    passport = require("passport");

// User profile - must be put before notLoggedIn middleware
router.get("/profile", isLoggedIn, function(req, res){
    console.log(req.session);
    res.render("user/profile");
});

// Logout
router.get("/logout", isLoggedIn, function(req, res){
    req.logout();
    res.redirect("/");
});

// Middleware for route protection
router.use("/", notLoggedIn, function(req, res, next){
    next();
});

// Sign up
router.get("/register", function(req, res){
    console.log(req.session);
    var errMessages = req.flash("error");
    console.log(errMessages);
    res.render("user/register", {errMessages: errMessages});
});

router.post("/register", passport.authenticate("local.signup", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/register",
    failureFlash: true
}));

// Login
router.get("/login", function(req, res){
    console.log(req.session);
    var errMessages = req.flash("error");
    console.log(errMessages);
    res.render("user/login", {errMessages: errMessages});
});

router.post("/login", passport.authenticate("local.signin", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/login",
    failureFlash: true
}));

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
};

function notLoggedIn(req, res, next){
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
};

module.exports = router;