var express = require("express"),
    app     = express();

var indexRoutes = require("./routes/index.js");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);

app.listen(3000, () => {
    console.log("shopping-cart server is now listening to port 3000.");
});