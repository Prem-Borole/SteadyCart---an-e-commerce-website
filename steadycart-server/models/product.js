const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    size: [String],
    image: String,
    rating: Number,
    stock: Number
});

module.exports = mongoose.model("Product", productSchema);