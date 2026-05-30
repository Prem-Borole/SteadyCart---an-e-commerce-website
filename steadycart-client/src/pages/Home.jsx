import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";

import { FaShoppingCart, FaSearch, FaStar } from "react-icons/fa";

function Home() {
    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const productsPerPage = 8;
        const { cart, addToCart } = useContext(CartContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);

            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
    );
    const indexOfLastProduct =
        currentPage *
        productsPerPage;

    const indexOfFirstProduct =
        indexOfLastProduct -
        productsPerPage;

    const currentProducts =
        filteredProducts.slice(

            indexOfFirstProduct,

            indexOfLastProduct
        );

    const totalPages =
        Math.ceil(

            filteredProducts.length /

            productsPerPage
        );
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* NAVBAR */}
{/* NAVBAR */}

<div
    className="
        bg-black
        text-white
        px-8
        py-4
        flex
        items-center
        justify-between
        shadow-lg
        sticky
        top-0
        z-50
    "
>

    {/* LOGO */}

    <Link
        to="/"
        className="flex items-center gap-3"
    >

        <div
            className="
                w-10
                h-10
                bg-green-500
                rounded-xl
                flex
                items-center
                justify-center
                font-bold
                text-xl
            "
        >
            S
        </div>

        <h1
            className="
                text-3xl
                font-bold
                tracking-wide
            "
        >
            SteadyCart
        </h1>

    </Link>


    {/* SEARCH */}

    <div
        className="
            hidden
            md:flex
            items-center
            bg-white
            rounded-full
            px-4
            py-2
            w-[400px]
        "
    >

        <FaSearch className="text-gray-500" />

        <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {

                setSearch(
                    e.target.value
                );

                setCurrentPage(1);

            }}
            className="
                outline-none
                px-3
                text-black
                w-full
            "
        />

    </div>


    {/* NAV LINKS */}

    <div
        className="
            flex
            items-center
            gap-6
            font-medium
        "
    >

        <Link
            to="/"
            className="
                hover:text-green-400
                transition
            "
        >
            Home
        </Link>

        <Link
            to="/cart"
            className="
                flex
                items-center
                gap-2
                hover:text-green-400
                transition
            "
        >

            <FaShoppingCart />

            Cart

            <span
                className="
                    bg-green-500
                    px-2
                    rounded-full
                    text-sm
                "
            >
                {
                    cart.reduce(
                        (sum, item) =>
                            sum + item.quantity,
                        0
                    )
                }
            </span>

        </Link>
        <Link
            to="/categories"
            className="
                hover:text-green-400
                transition
            "
        >
            Categories
        </Link>
        <Link
            to="/retailer"
            className="
                bg-green-500
                hover:bg-green-600
                px-5
                py-2
                rounded-xl
                transition
            "
        >
            Retailer
        </Link>

    </div>

</div>
            {/* HERO */}

            <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 px-10 text-center">
                <h1 className="text-6xl font-bold mb-6">Premium Shopping Experience</h1>

                <p className="text-xl text-gray-300 mb-6">
                    Discover the latest gadgets, fashion and accessories
                </p>

                <button className="bg-green-500 px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition">
                    Shop Now
                </button>
            </div>
            <div className="p-10">

                <h2 className="text-4xl font-bold mb-8">
                    Shop By Category
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    <Link to="/category/Mobile">
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl text-center">
                            <div className="text-5xl mb-3">📱</div>
                            <h3 className="font-bold text-xl">Mobile</h3>
                        </div>
                    </Link>

                    <Link to="/category/Laptop">
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl text-center">
                            <div className="text-5xl mb-3">💻</div>
                            <h3 className="font-bold text-xl">Laptop</h3>
                        </div>
                    </Link>

                    <Link to="/category/Gaming">
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl text-center">
                            <div className="text-5xl mb-3">🎮</div>
                            <h3 className="font-bold text-xl">Gaming</h3>
                        </div>
                    </Link>

                    <Link to="/category/Fashion">
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl text-center">
                            <div className="text-5xl mb-3">👕</div>
                            <h3 className="font-bold text-xl">Fashion</h3>
                        </div>
                    </Link>

                </div>

            </div>
            {/* PRODUCTS */}

            <div className="p-10">
                <h2 className="text-4xl font-bold mb-10">Trending Products</h2>
                <p
                    className="
                        text-gray-500
                        mb-8
                    "
                >
                    Showing
                    {" "}
                    {currentProducts.length}
                    {" "}
                    products out of
                    {" "}
                    {filteredProducts.length}
                </p>
                {filteredProducts.length === 0 && (
                    <div className="text-center text-gray-500 text-2xl">
                        No Products Found
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {currentProducts.map((product) => (
                        <div
                            key={product._id}
                            className="
                                    bg-white
                                    rounded-3xl
                                    overflow-hidden
                                    shadow-lg
                                    hover:shadow-2xl
                                    transition
                                    duration-300
                                    hover:-translate-y-2
                                "
                        >
                            {/* IMAGE */}

                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-72 object-cover"
                            />

                            {/* CONTENT */}

                            <div className="p-5">
                                <div className="flex justify-between items-center">
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                        {product.category}
                                    </span>

                                    <span className="flex items-center gap-1 text-yellow-500">
                                        <FaStar />

                                        {product.rating}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold mt-4">{product.name}</h2>

                                <p className="text-gray-500 mt-3 h-12 overflow-hidden">
                                    {product.description}
                                </p>
                                <div>
                                    <h3 className="text-3xl font-bold text-green-600">
                                        ₹{product.price}
                                    </h3>

                                    <p
                                        className={`
            mt-2
            text-sm
            font-medium
            ${product.stock <= 5 ? "text-red-500" : "text-green-600"}
        `}
                                    >
                                        Stock Available: {product.stock}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-5">
                                    <button
                                        disabled={product.stock === 0}
                                        onClick={() => addToCart(product)}
                                        className={`
        py-3
        rounded-xl
        text-white
        ${product.stock === 0
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-black hover:bg-gray-800"
                                            }
    `}
                                    >
                                        {product.stock === 0 ? "Out of Stock" : "Add Cart"}
                                    </button>
                                    <Link to={`/product/${product._id}`}>
                                        <button
                                            className="
                                                    w-full
                                                    bg-green-500
                                                    text-white
                                                    py-3
                                                    rounded-xl
                                                    hover:bg-green-600
                                                "
                                        >
                                            Details
                                        </button>
                                    </Link>
                                </div>
                                
                            </div>
                            
                        </div>
                    ))}
                </div>
                <div
    className="
        flex
        justify-center
        gap-3
        mt-12
        flex-wrap
    "
>

    <button

        disabled={
            currentPage === 1
        }

        onClick={() =>
            setCurrentPage(
                currentPage - 1
            )
        }

        className="
            bg-white
            px-5
            py-3
            rounded-xl
            shadow
            disabled:opacity-50
        "
    >
        Previous
    </button>

    {
        [...Array(totalPages)]
        .map((_, index) => (

            <button

                key={index}

                onClick={() =>
                    setCurrentPage(
                        index + 1
                    )
                }

                className={`
                    px-5
                    py-3
                    rounded-xl
                    font-bold

                    ${
                        currentPage ===
                        index + 1

                        ?

                        "bg-black text-white"

                        :

                        "bg-white shadow"
                    }
                `}
            >
                {index + 1}
            </button>

        ))
    }

    <button

        disabled={
            currentPage ===
            totalPages
        }

        onClick={() =>
            setCurrentPage(
                currentPage + 1
            )
        }

        className="
            bg-white
            px-5
            py-3
            rounded-xl
            shadow
            disabled:opacity-50
        "
    >
        Next
    </button>

</div>
            </div>
        </div>
    );
}

export default Home;
