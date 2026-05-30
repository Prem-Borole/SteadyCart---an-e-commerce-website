const express = require("express");

const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {

    try {

        const paymentIntent =
            await stripe.paymentIntents.create({

            amount: req.body.amount,

            currency: "usd",

            automatic_payment_methods: {
                enabled: true
            }

        });

        res.send({
            clientSecret: paymentIntent.client_secret
        });

    } catch (error) {

        res.status(500).json(error.message);

    }

});

module.exports = router;