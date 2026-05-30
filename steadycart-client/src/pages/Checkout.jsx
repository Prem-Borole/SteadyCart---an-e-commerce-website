import { useContext, useState } from "react";
import axios from "axios";

import { CartContext }
from "../context/CartContext";

function Checkout() {

    const {
        cart,
        clearCart
    } = useContext(CartContext);

    const [customerName,
        setCustomerName] =
        useState("");

    const [customerEmail,
        setCustomerEmail] =
        useState("");

    const total =
        cart.reduce(

            (sum, item) =>
                sum +
                item.price *
                item.quantity,

            0
        );

    const placeOrder =
        async () => {

            try {

                await axios.post(

                    "import.meta.env.VITE_API_URL/api/orders",

                    {
                        customerName,
                        customerEmail,
                        items: cart,
                        total
                    }
                );

                alert(
                    "Order Placed Successfully"
                );

                clearCart();

            } catch (error) {

                console.log(error);
            }
        };

    return (

        <div className="p-10">

            <h1
                className="
                    text-5xl
                    font-bold
                    mb-8
                "
            >
                Checkout
            </h1>

            <div
                className="
                    bg-white
                    rounded-3xl
                    p-8
                    shadow
                    max-w-xl
                "
            >

                <input

                    placeholder="Full Name"

                    value={customerName}

                    onChange={(e) =>
                        setCustomerName(
                            e.target.value
                        )
                    }

                    className="
                        border
                        p-4
                        w-full
                        mb-4
                    "
                />

                <input

                    placeholder="Email"

                    value={customerEmail}

                    onChange={(e) =>
                        setCustomerEmail(
                            e.target.value
                        )
                    }

                    className="
                        border
                        p-4
                        w-full
                        mb-4
                    "
                />

                <h2
                    className="
                        text-2xl
                        font-bold
                        mb-6
                    "
                >
                    Total:
                    ₹{total}
                </h2>

                <button

                    onClick={placeOrder}

                    className="
                        bg-black
                        text-white
                        px-8
                        py-4
                        rounded-xl
                    "
                >
                    Place Order
                </button>

            </div>

        </div>
    );
}

export default Checkout;