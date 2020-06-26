var mongoose = require("mongoose");

var laptopSchema = new mongoose.Schema({
    brand: {type: String, required: true},  // Lenovo
    name: {type: String, required: true},  // Legion Y740
    id: {type: String, required: true},  // 81UJ0097RM
    image: {type: String, required: true},  // link
    displaySize: {type: Number, required: true},  // 17.3 (in)
    displayResolution: {type: String, required: true},  // 1920x1080
    cpuBrand: {type: String, required: true},  // Intel
    cpuModel: {type: String, required: true},  // Core i9-9880H
    cpuFrequency: {type: Number, required: true},  // 2.3 (GHz)
    cpuCores: {type: Number, required: true},  // 8(cores)
    cpuThreads: {type: Number, required: true},  // 16(threads)
    memoryType: {type: String, required: true},  // DDR4
    memorySize: {type: Number, required: true},  // 32(GB)
    memoryFrequency: {type: Number, required: true},  // 2666(MHz)
    gpuBrand: {type: String, required: true},  // NVIDIA
    gpuModel: {type: String, required: true},  // GeForce RTX 2080
    gpuType: {type: String, required: true},  // Dedicated
    gpuMemoryType: {type: String, required: true},  // GDDR6
    gpuMemorySize: {type: Number, required: true},  // 8(GB)
    storage: {type: String, required: true},  // HDD 1TB, 7200rpm; SSD 512GB, M.2 PCIe
    price: {type: Number, required: true}
});

module.exports = mongoose.model("Laptop", laptopSchema);