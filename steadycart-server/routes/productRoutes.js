const express = require("express");

const router = express.Router();

const Product = require("../models/Product");


// GET PRODUCTS
router.get("/", async (req, res) => {

    try {

        const products = await Product.find();

        res.json(products);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
});


// ADD PRODUCT
router.post("/add", async (req, res) => {

    try {

        console.log(req.body);

        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image,
            stock: req.body.stock,
            rating: req.body.rating
        });

        const savedProduct = await product.save();

        res.json(savedProduct);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
});


// DELETE PRODUCT
router.delete("/:id", async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);

        res.json({
            message: "Deleted"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;