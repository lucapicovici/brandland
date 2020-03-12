var mongoose = require("mongoose"),
    Product  = require("./models/product.js");

var data = [
    {
        imagePath: "http://www.notebookcheck.net/fileadmin/_processed_/csm_Lenovo_Legion_Y520_6_a1495ae7b3.png",
        title: "Lenovo Y520",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1099
    },
    {
        imagePath: "https://lenardgunda.blob.core.windows.net/lgc/2019/01/P8150642.jpg",
        title: "Lenovo Y530",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1299
    },
    {
        imagePath: "https://www.lenovo.com/medias/lenovo-legion-y540-15-3.png?context=bWFzdGVyfHJvb3R8MTI1NjA1fGltYWdlL3BuZ3xoYmMvaDY4LzEwMDkyNjE0MjU0NjIyLnBuZ3w5YzU2YTdkYjU3M2UxZjY1NGMyMzlhNDc2ZDAyZjZhNTVhYmFiMTc5NTc1YzZhY2U2N2JlZjU5NzM5OWM2M2Yy",
        title: "Lenovo Y540",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1599
    },
    {
        imagePath: "http://www.notebookcheck.net/fileadmin/_processed_/csm_Lenovo_Legion_Y520_6_a1495ae7b3.png",
        title: "Lenovo Y520",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1099
    },
    {
        imagePath: "https://lenardgunda.blob.core.windows.net/lgc/2019/01/P8150642.jpg",
        title: "Lenovo Y530",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1299
    },
    {
        imagePath: "https://www.lenovo.com/medias/lenovo-legion-y540-15-3.png?context=bWFzdGVyfHJvb3R8MTI1NjA1fGltYWdlL3BuZ3xoYmMvaDY4LzEwMDkyNjE0MjU0NjIyLnBuZ3w5YzU2YTdkYjU3M2UxZjY1NGMyMzlhNDc2ZDAyZjZhNTVhYmFiMTc5NTc1YzZhY2U2N2JlZjU5NzM5OWM2M2Yy",
        title: "Lenovo Y540",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1599
    }
];

function seedDB() {
    Product.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed all products from database.");
            data.forEach(function(product){
                Product.create(product, function(err, product){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added product " + product.title);
                    }
                });
            });
        }
    });
};

module.exports = seedDB;