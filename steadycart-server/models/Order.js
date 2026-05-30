const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: true
    },

    customerEmail: {
        type: String,
        required: true
    },

    items: {
        type: Array,
        required: true
    },

    total: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "Pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Order",
    orderSchema
);