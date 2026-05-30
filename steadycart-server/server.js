const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();


// MIDDLEWARE
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://steady-cart-an-e-commerce-website.vercel.app"
    ],
    credentials: true
  })
);

app.use(express.json());
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const Retailer = require("./models/Retailer");
const Order = require("./models/Order");
// MONGODB CONNECTION
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.error("MongoDB Error:", err);
  process.exit(1);
});

// PRODUCT SCHEMA
const productSchema = new mongoose.Schema({

    name: String,

    description: String,

    price: Number,

    category: String,

    image: String,

    stock: Number,

    rating: Number
});


// MODEL
const Product = mongoose.model(
    "Product",
    productSchema
);

app.post("/api/orders", async (req, res) => {

    try {

        const order = new Order(req.body);

        const savedOrder =
            await order.save();

        res.json(savedOrder);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


app.put(
    "/api/orders/:id",
    async (req, res) => {

        try {

            const order =
                await Order.findByIdAndUpdate(

                    req.params.id,

                    {
                        status:
                            req.body.status
                    },

                    {
                        new: true
                    }
                );

            res.json(order);

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    }
);
// HOME ROUTE
app.get("/", (req, res) => {

    res.send("API Running");
});

// something called prodect view in retailer
app.put(
    "/api/products/:id",
    async (req, res) => {

        try {

            const product =
                await Product.findByIdAndUpdate(

                    req.params.id,

                    req.body,

                    { new: true }
                );

            res.json(product);

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    }
);

// GET PRODUCTS
app.get("/api/products", async (req, res) => {

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
app.post("/api/products/add", async (req, res) => {

    try {

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


app.get("/api/products/:id", async (req, res) => {

    try {

        const product = await Product.findById(
            req.params.id
        );

        res.json(product);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
});

// DELETE PRODUCT
app.delete("/api/products/:id", async (req, res) => {

    try {

        await Product.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Product Deleted"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
});



//get order
app.get("/api/orders", async (req, res) => {

    try {

        const orders =
            await Order.find()
            .sort({ createdAt: -1 });

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});
//update order status


// register route
app.post(
    "/api/retailer/register",

    async (req, res) => {

        try {

            const hashedPassword =
                await bcrypt.hash(
                    req.body.password,
                    10
                );

            const retailer =
                new Retailer({

                    email:
                        req.body.email,

                    password:
                        hashedPassword
                });

            await retailer.save();

            res.json({
                message:
                    "Retailer Created"
            });

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    }
);
//retailer login
app.post(
    "/api/retailer/login",

    async (req, res) => {

        try {

            const retailer =
                await Retailer.findOne({

                    email:
                        req.body.email
                });

            if (!retailer) {

                return res.status(400)
                    .json({

                        message:
                            "Retailer Not Found"
                    });
            }

            const validPassword =
                await bcrypt.compare(

                    req.body.password,

                    retailer.password
                );

            if (!validPassword) {

                return res.status(400)
                    .json({

                        message:
                            "Wrong Password"
                    });
            }

            const token =
                jwt.sign(

                    {
                        retailerId:
                            retailer._id
                    },

                    process.env.JWT_SECRET,

                    {
                        expiresIn: "7d"
                    }
                );

            res.json({
                token
            });

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            });
        }
    }
);

app.get(
    "/api/analytics",
    async (req, res) => {

        const orders =
            await Order.find();

        const revenue =
            orders.reduce(
                (sum, order) =>
                    sum + order.total,
                0
            );

        res.json({

            revenue,

            totalOrders:
                orders.length
        });
    }
);
// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});