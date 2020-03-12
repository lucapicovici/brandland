var passport      = require("passport"),
    User          = require("../models/user.js"),
    localStrategy = require("passport-local");

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if (err) {
            console.log(err);
        } else {
            done(err, user);
        }
    });
});

passport.use("local.signup", new localStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, function(req, email, password, done){
    User.findOne({"email": email}, function(err, foundUser){
        if (err) {
            return done(err);
        }
        // Return (flash) message if the user already exists, 
        // so you don't overwrite or create a new one with same email
        if (foundUser) {
            return done(null, false, {message: "Email is already in use."});
        }
        // Create new user
        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);

        newUser.save(function(err, user){
            if (err) {
                return done(err);
            }
            return done(null, user);
        });
    });
}));