var mongoose = require("mongoose");

var laptopRamSchema = new mongoose.Schema({
    brand: {type: String, required: true},  // Kingston
    name: {type: String, required: true},  // 16GB, DDR4, 2666MHz, CL17, 1.2v
    id: {type: String, required: true},  // KCP426SD8/16
    image: {type: String, required: true},  // link
    memoryType: {type: String, required: true},  // DDR4 SODIMM
    memorySize: {type: Number, required: true},  // 16 (GB)
    memoryFrequency: {type: Number, required: true},  // 2666 (MHz)
    casLatency: {type: Number, required: true},  // 17 (ns)
    standard: {type: String, required: true},  // PC4-21300
    voltage: {type: Number, required: true},  // 1.2V
    price: {type: Number, required: true}
});

module.exports = mongoose.model("Laptop_Ram", laptopRamSchema);