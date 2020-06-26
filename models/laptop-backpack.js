var mongoose = require("mongoose");

var laptopBackpackSchema = new mongoose.Schema({
    brand: {type: String, required: true},  // ASUS
    name: {type: String, required: true},  // Modular ROG BP3703
    id: {type: String, required: true},  // 90XB05X0-BBP010
    image: {type: String, required: true},  // link
    maxLaptopDisplaySize: {type: Number, required: true},  // 17.3 (in)
    dimensions: {type: String, required: true},  // 480 x 300 x 170 mm
    colour: {type: String, required: true},  // Black
    weight: {type: Number, required: true},  // 1.94 (kg)
    price: {type: Number, required: true}
});

module.exports = mongoose.model("Laptop_Backpack", laptopBackpackSchema);