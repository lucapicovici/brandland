var express      = require("express"),
    mongoose     = require("mongoose"),
    seedDB       = require("./seeds.js"),
    passport     = require("passport"),
    flash        = require("connect-flash"),
    bodyParser   = require("body-parser"),
    validator    = require("express-validator"),
    cookieParser = require("cookie-parser"),
    session      = require("express-session"),
    mongoStore   = require("connect-mongo")(session),
    app          = express();

var indexRoutes = require("./routes/index.js"),
    userRoutes  = require("./routes/user.js");
require("./config/passport.js");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(session({
    secret: "This app functionality is really cool so far",
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator()); // After bodyParser
app.use(flash());

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/shopping-cart");
seedDB();

app.use(function(req, res, next){
    res.locals.login = req.isAuthenticated();
    req.locals.session = req.session;
    next();
});

app.use("/user", userRoutes);
app.use("/", indexRoutes);

app.listen(3000, () => {
    console.log("shopping-cart server is now listening to port 3000.");
});