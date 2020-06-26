var mongoose        = require("mongoose"),
    Laptop          = require("./models/laptop.js"),
    Laptop_Backpack = require("./models/laptop-backpack.js"),
    Laptop_Ram      = require("./models/laptop-ram.js");

var laptopData = [
    {
        brand: "Lenovo",
        name: "Legion Y740",
        id: "81UJ0097RM",
        image: "https://3.grgs.ro/images/products/1/3049/2030634/normal/gaming-173-legion-y740-fhd-ips-144hz-g-sync-procesor-intel-core-i9-9880h-16m-cache-up-to-480-ghz-32gb-ddr4-1tb-7200-rpm-plus-512gb-ssd-geforce-rtx-208-7f8d7f523156813e1a68b55089edd075.jpg",
        displaySize: 17.3,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i9-9880H",
        cpuFrequency: 2.3,
        cpuCores: 8,
        cpuThreads: 16,
        memoryType: "DDR4",
        memorySize: 32,
        memoryFrequency: 2666,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce RTX 2080",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 8,
        storage: "HDD 1TB, 7200rpm; SSD 512GB, M.2 PCIe",
        price: 3374
    },
    {
        brand: "Lenovo",
        name: "Legion Y730",
        id: "81Q400FRRM",
        image: "https://p1.akcdn.net/full/559764693.lenovo-ideapad-y730-81hd003vhv.jpg",
        displaySize: 17.3,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i5-9300HF",
        cpuFrequency: 2.4,
        cpuCores: 4,
        cpuThreads: 8,
        memoryType: "DDR4",
        memorySize: 16,
        memoryFrequency: 2666,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce RTX 2060",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 6,
        storage: "SSD 512GB, M.2 PCIe",
        price: 1247
    },
    {
        brand: "Lenovo",
        name: "Legion Y520",
        id: "80YY000PRI",
        image: "https://p1.akcdn.net/full/439173185.lenovo-legion-y520-80wk009ghv.jpg",
        displaySize: 15.6,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i7-7700HQ",
        cpuFrequency: 2.8,
        cpuCores: 4,
        cpuThreads: 8,
        memoryType: "DDR4",
        memorySize: 8,
        memoryFrequency: 2400,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce GTX 1060",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 6,
        storage: "HDD 1TB, 5400rpm; SSD 256GB, M.2 PCIe",
        price: 999
    },
    {
        brand: "Lenovo",
        name: "Legion Y740",
        id: "81UJ0097RM",
        image: "https://3.grgs.ro/images/products/1/3049/2030634/normal/gaming-173-legion-y740-fhd-ips-144hz-g-sync-procesor-intel-core-i9-9880h-16m-cache-up-to-480-ghz-32gb-ddr4-1tb-7200-rpm-plus-512gb-ssd-geforce-rtx-208-7f8d7f523156813e1a68b55089edd075.jpg",
        displaySize: 17.3,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i9-9880H",
        cpuFrequency: 2.3,
        cpuCores: 8,
        cpuThreads: 16,
        memoryType: "DDR4",
        memorySize: 32,
        memoryFrequency: 2666,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce RTX 2080",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 8,
        storage: "HDD 1TB, 7200rpm; SSD 512GB, M.2 PCIe",
        price: 3374
    },
    {
        brand: "Lenovo",
        name: "Legion Y730",
        id: "81Q400FRRM",
        image: "https://p1.akcdn.net/full/559764693.lenovo-ideapad-y730-81hd003vhv.jpg",
        displaySize: 17.3,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i5-9300HF",
        cpuFrequency: 2.4,
        cpuCores: 4,
        cpuThreads: 8,
        memoryType: "DDR4",
        memorySize: 16,
        memoryFrequency: 2666,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce RTX 2060",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 6,
        storage: "SSD 512GB, M.2 PCIe",
        price: 1247
    },
    {
        brand: "Lenovo",
        name: "Legion Y520",
        id: "80YY000PRI",
        image: "https://p1.akcdn.net/full/439173185.lenovo-legion-y520-80wk009ghv.jpg",
        displaySize: 15.6,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i7-7700HQ",
        cpuFrequency: 2.8,
        cpuCores: 4,
        cpuThreads: 8,
        memoryType: "DDR4",
        memorySize: 8,
        memoryFrequency: 2400,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce GTX 1060",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 6,
        storage: "HDD 1TB, 5400rpm; SSD 256GB, M.2 PCIe",
        price: 999
    },
    {
        brand: "Lenovo",
        name: "Legion Y740",
        id: "81UJ0097RM",
        image: "https://3.grgs.ro/images/products/1/3049/2030634/normal/gaming-173-legion-y740-fhd-ips-144hz-g-sync-procesor-intel-core-i9-9880h-16m-cache-up-to-480-ghz-32gb-ddr4-1tb-7200-rpm-plus-512gb-ssd-geforce-rtx-208-7f8d7f523156813e1a68b55089edd075.jpg",
        displaySize: 17.3,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i9-9880H",
        cpuFrequency: 2.3,
        cpuCores: 8,
        cpuThreads: 16,
        memoryType: "DDR4",
        memorySize: 32,
        memoryFrequency: 2666,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce RTX 2080",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 8,
        storage: "HDD 1TB, 7200rpm; SSD 512GB, M.2 PCIe",
        price: 3374
    },
    {
        brand: "Lenovo",
        name: "Legion Y730",
        id: "81Q400FRRM",
        image: "https://p1.akcdn.net/full/559764693.lenovo-ideapad-y730-81hd003vhv.jpg",
        displaySize: 17.3,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i5-9300HF",
        cpuFrequency: 2.4,
        cpuCores: 4,
        cpuThreads: 8,
        memoryType: "DDR4",
        memorySize: 16,
        memoryFrequency: 2666,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce RTX 2060",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 6,
        storage: "SSD 512GB, M.2 PCIe",
        price: 1247
    },
    {
        brand: "Lenovo",
        name: "Legion Y520",
        id: "80YY000PRI",
        image: "https://p1.akcdn.net/full/439173185.lenovo-legion-y520-80wk009ghv.jpg",
        displaySize: 15.6,
        displayResolution: "1920x1080",
        cpuBrand: "Intel",
        cpuModel: "Core i7-7700HQ",
        cpuFrequency: 2.8,
        cpuCores: 4,
        cpuThreads: 8,
        memoryType: "DDR4",
        memorySize: 8,
        memoryFrequency: 2400,
        gpuBrand: "NVIDIA",
        gpuModel: "GeForce GTX 1060",
        gpuType: "Dedicated",
        gpuMemoryType: "GDDR6",
        gpuMemorySize: 6,
        storage: "HDD 1TB, 5400rpm; SSD 256GB, M.2 PCIe",
        price: 999
    }
];

var laptop_backpackData = [
    {
        brand: "ASUS",
        name: "Modular ROG BP3703",
        id: "90XB05X0-BBP010",
        image: "https://5.grgs.ro/images/products/1/8840/2028570/normal/rucsac-notebook-173-inch-rog-bp3703-iluminare-rgb-black-ecaeb8d08fc16d86b734e18b8a8135be.jpg",
        maxLaptopDisplaySize: 17.3,
        dimensions: "440 x 315 x 150 mm",
        colour: "Grey",
        weight: 1,
        price: 266.77
    },
    {
        brand: "HP",
        name: "Envy Urban Grey",
        id: "3KJ72AA",
        image: "https://5.grgs.ro/images/products/1/1868718/1878102/normal/rucsac-notebook-156-inch-envy-urban-grey-8ea686529f4bf84c60d76e5bda39c2fd.jpg",
        maxLaptopDisplaySize: 15.6,
        dimensions: "480 x 300 x 170 mm",
        colour: "Black",
        weight: 1.94,
        price: 49
    },
    {
        brand: "DELL",
        name: "Pursuit Black",
        id: "460-BCKK",
        image: "https://3.grgs.ro/images/products/1/8674/1729612/normal/rucsac-notebook-17-inch-pursuit-black-86665f4456da70d2a6db7fa59234b4a5.jpg",
        maxLaptopDisplaySize: 17.3,
        dimensions: "31 x 50 x 20.5 cm",
        colour: "Black",
        weight: 0.93,
        price: 39
    }
];

var laptop_ramData = [
    {
        brand: "Kingston",
        name: "16GB, DDR4, 2666MHz, CL17, 1.2v",
        id: "KCP426SD8/16",
        image: "https://5.grgs.ro/images/products/1/986422/1695204/normal/valueram-16gb-ddr4-2400mhz-cl17-12v-bb44c7a719b01fe3c7de3d8390ec384c.jpg",
        memoryType: "DDR4 SODIMM",
        memorySize: 16,
        memoryFrequency: 2666,
        casLatency: 17,
        standard: "PC4-21300",
        voltage: 1.2,
        price: 82
    },
    {
        brand: "HyperX",
        name: "Impact, 16GB, DDR4, 2666MHz, CL15, 1.2v",
        id: "HX426S15IB2/16",
        image: "https://3.grgs.ro/images/products/1/746930/1789624/normal/impact-8gb-ddr4-2400mhz-cl14-12v-0bc11328fdda6edd002f8efcc0837143.jpg",
        memoryType: "DDR4 SODIMM",
        memorySize: 16,
        memoryFrequency: 2666,
        casLatency: 17,
        standard: "PC4-21300",
        voltage: 1.2,
        price: 79
    },
    {
        brand: "HyperX",
        name: "Impact, 8GB, DDR3, 1600MHz, CL9, 1.35v",
        id: "HX316LS9IB/8",
        image: "https://5.grgs.ro/images/products/1/802687/853543/normal/impact-8gb-ddr3l-1600mhz-cl9-3770b7afbf987f23dfddeb42c7b13316.jpg",
        memoryType: "DDR3 SODIMM",
        memorySize: 8,
        memoryFrequency: 1600,
        casLatency: 9,
        standard: "PC4-12800",
        voltage: 1.35,
        price: 47
    },
    {
        brand: "Corsair ",
        name: "ValueSelect, 16GB, DDR4, 2133MHz, CL15, 1.2v",
        id: "CMSO16GX4M1A2133C15",
        image: "https://3.grgs.ro/images/products/1/959008/1155033/normal/valueselect-8gb-ddr4-2133mhz-cl15-d18258f636672c68dc8ba5104adf850d.jpg",
        memoryType: "DDR4 SODIMM",
        memorySize: 16,
        memoryFrequency: 2133,
        casLatency: 15,
        standard: "PC4-17000",
        voltage: 1.2,
        price: 91
    }
];

function seedDB() {
    Laptop.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed all laptops from database.");
            laptopData.forEach(function(laptop){
                Laptop.create(laptop, function(err, laptop){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added laptop " + laptop.name);
                    }
                });
            });
        }
    });

    Laptop_Backpack.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed all laptop backpacks from database.");
            laptop_backpackData.forEach(function(laptop_backpack){
                Laptop_Backpack.create(laptop_backpack, function(err, laptop_backpack){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added laptop backpack " + laptop_backpack.name);
                    }
                });
            });
        }
    });

    Laptop_Ram.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed all laptop RAM from database.");
            laptop_ramData.forEach(function(laptop_ram){
                Laptop_Ram.create(laptop_ram, function(err, laptop_ram){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added laptop RAM " + laptop_ram.name);
                    }
                });
            });
        }
    });
};

module.exports = seedDB;