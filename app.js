var express  = require("express"),
    mongoose = require("mongoose"),
    seedDB   = require("./seeds.js"),
    app      = express();

var indexRoutes = require("./routes/index.js");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/shopping-cart");
seedDB();

app.use("/", indexRoutes);

app.listen(3000, () => {
    console.log("shopping-cart server is now listening to port 3000.");
});