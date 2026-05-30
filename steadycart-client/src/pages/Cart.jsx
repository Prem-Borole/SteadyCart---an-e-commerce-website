import { useContext } from "react";

import {
    FaTrash,
    FaPlus,
    FaMinus,
    FaShoppingCart
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function Cart() {

    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useContext(CartContext);

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-5xl font-bold mb-10">

                Shopping Cart

            </h1>

            {
                cart.length === 0 ? (

                    <div className="bg-white rounded-3xl p-20 text-center shadow-lg">

                        <FaShoppingCart
                            className="
                                mx-auto
                                text-7xl
                                text-gray-300
                                mb-6
                            "
                        />

                        <h2 className="text-3xl font-bold">

                            Your Cart is Empty

                        </h2>

                        <p className="text-gray-500 mt-4">

                            Start shopping to add products.

                        </p>

                        <Link to="/">

                            <button
                                className="
                                    mt-8
                                    bg-black
                                    text-white
                                    px-8
                                    py-4
                                    rounded-xl
                                "
                            >
                                Continue Shopping
                            </button>

                        </Link>

                    </div>

                ) : (

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* CART ITEMS */}

                        <div className="lg:col-span-2">

                            {
                                cart.map(item => (

                                    <div
                                        key={item._id}

                                        className="
                                            bg-white
                                            rounded-3xl
                                            shadow-lg
                                            mb-6
                                            overflow-hidden
                                        "
                                    >

                                        <div className="flex flex-col md:flex-row">

                                            <img
                                                src={
                                                    item.image ||
                                                    "https://via.placeholder.com/400x300?text=No+Image"
                                                }

                                                alt={item.name}

                                                className="
                                                    w-full
                                                    md:w-56
                                                    h-56
                                                    object-cover
                                                "
                                            />

                                            <div className="flex-1 p-6">

                                                <h2 className="text-2xl font-bold">

                                                    {item.name}

                                                </h2>

                                                <p className="text-gray-500 mt-2">

                                                    {item.description}

                                                </p>

                                                <h3
                                                    className="
                                                        text-3xl
                                                        font-bold
                                                        text-green-600
                                                        mt-4
                                                    "
                                                >
                                                    ₹{item.price}
                                                </h3>

                                                {/* QUANTITY */}

                                                <div className="flex items-center gap-4 mt-5">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(
                                                                item._id
                                                            )
                                                        }

                                                        className="
                                                            bg-gray-200
                                                            p-3
                                                            rounded-full
                                                            hover:bg-gray-300
                                                        "
                                                    >
                                                        <FaMinus />
                                                    </button>

                                                    <span
                                                        className="
                                                            text-2xl
                                                            font-bold
                                                        "
                                                    >
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increaseQuantity(
                                                                item._id
                                                            )
                                                        }

                                                        className="
                                                            bg-gray-200
                                                            p-3
                                                            rounded-full
                                                            hover:bg-gray-300
                                                        "
                                                    >
                                                        <FaPlus />
                                                    </button>

                                                </div>

                                                {/* SUBTOTAL */}

                                                <div className="mt-4">

                                                    <span className="font-semibold">

                                                        Subtotal:
                                                    </span>

                                                    <span className="ml-2 text-green-600 font-bold">

                                                        ₹
                                                        {
                                                            item.price *
                                                            item.quantity
                                                        }

                                                    </span>

                                                </div>

                                                {/* REMOVE */}

                                                <button
                                                    onClick={() =>
                                                        removeFromCart(
                                                            item._id
                                                        )
                                                    }

                                                    className="
                                                        mt-5
                                                        bg-red-500
                                                        hover:bg-red-600
                                                        text-white
                                                        px-5
                                                        py-3
                                                        rounded-xl
                                                        flex
                                                        items-center
                                                        gap-2
                                                    "
                                                >

                                                    <FaTrash />

                                                    Remove

                                                </button>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                        {/* ORDER SUMMARY */}

                        <div>

                            <div
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow-lg
                                    p-8
                                    sticky
                                    top-8
                                "
                            >

                                <h2 className="text-3xl font-bold mb-8">

                                    Order Summary

                                </h2>

                                <div className="flex justify-between mb-4">

                                    <span>

                                        Products

                                    </span>

                                    <span>

                                        {
                                            cart.reduce(
                                                (sum, item) =>
                                                    sum + item.quantity,
                                                0
                                            )
                                        }

                                    </span>

                                </div>

                                <div className="flex justify-between mb-4">

                                    <span>

                                        Shipping

                                    </span>

                                    <span className="text-green-600">

                                        Free

                                    </span>

                                </div>

                                <div className="flex justify-between mb-4">

                                    <span>

                                        Tax

                                    </span>

                                    <span>

                                        ₹0

                                    </span>

                                </div>

                                <hr className="my-5" />

                                <div
                                    className="
                                        flex
                                        justify-between
                                        text-2xl
                                        font-bold
                                    "
                                >

                                    <span>

                                        Total

                                    </span>

                                    <span className="text-green-600">

                                        ₹{total}

                                    </span>

                                </div>

                                <Link to="/checkout">

                                    <button
                                        className="
                                            w-full
                                            mt-8
                                            bg-black
                                            text-white
                                            py-4
                                            rounded-2xl
                                            text-lg
                                            font-bold
                                            hover:bg-gray-800
                                        "
                                    >

                                        Proceed To Checkout

                                    </button>

                                </Link>

                            </div>

                        </div>

                    </div>

                )
            }

        </div>
    );
}

export default Cart;