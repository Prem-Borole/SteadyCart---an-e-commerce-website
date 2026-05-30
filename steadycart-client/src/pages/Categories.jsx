import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {

    const [categories, setCategories] =
        useState([]);

    const [search, setSearch] =
        useState("");

    useEffect(() => {

        fetchCategories();

    }, []);

    const fetchCategories = async () => {

        try {

            const res = await axios.get(
                "import.meta.env.VITE_API_URL/api/products"
            );

            const categoryMap = {};

            res.data.forEach(product => {

                if (
                    categoryMap[
                        product.category
                    ]
                ) {

                    categoryMap[
                        product.category
                    ]++;

                } else {

                    categoryMap[
                        product.category
                    ] = 1;
                }
            });

            setCategories(
                Object.entries(
                    categoryMap
                )
            );

        } catch (error) {

            console.log(error);
        }
    };

    const categoryIcons = {

        Mobile: "📱",

        Laptop: "💻",

        Gaming: "🎮",

        Fashion: "👕",

        Audio: "🎧",

        Camera: "📷",

        Home: "🏠",

        Furniture: "🛋️",

        Accessories: "⌨️",

        Electronics: "📺",

        Tablet: "📟",

        Wearables: "⌚"
    };

    const filteredCategories =
        categories.filter(

            ([category]) =>

                category
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );

    return (

        <div className="min-h-screen bg-gray-100">

            {/* HERO */}

            <div
                className="
                    bg-gradient-to-r
                    from-black
                    to-gray-800
                    text-white
                    py-16
                    px-10
                "
            >

                <h1
                    className="
                        text-5xl
                        font-bold
                        mb-4
                    "
                >
                    Browse Categories
                </h1>

                <p
                    className="
                        text-gray-300
                        text-lg
                    "
                >
                    Explore products by category
                </p>

            </div>

            <div className="p-10">

                {/* SEARCH */}

                <div className="mb-10">

                    <input

                        type="text"

                        placeholder="🔍 Search Category..."

                        value={search}

                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }

                        className="
                            w-full
                            md:w-[450px]
                            bg-white
                            p-4
                            rounded-2xl
                            shadow-lg
                            outline-none
                        "
                    />

                </div>

                {/* CATEGORY GRID */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        gap-8
                    "
                >

                    {
                        filteredCategories.map(

                            ([category, count]) => (

                                <Link
                                    key={category}
                                    to={`/category/${category}`}
                                >

                                    <div
                                        className="
                                            bg-white
                                            rounded-3xl
                                            p-8
                                            shadow-lg
                                            hover:shadow-2xl
                                            hover:-translate-y-2
                                            transition
                                            duration-300
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                justify-between
                                                items-center
                                            "
                                        >

                                            <div>

                                                <span
                                                    className="
                                                        text-5xl
                                                    "
                                                >
                                                    {
                                                        categoryIcons[
                                                            category
                                                        ] || "🛒"
                                                    }
                                                </span>

                                            </div>

                                            <span
                                                className="
                                                    bg-green-500
                                                    text-white
                                                    px-4
                                                    py-2
                                                    rounded-full
                                                    font-bold
                                                "
                                            >
                                                {count}
                                            </span>

                                        </div>

                                        <h2
                                            className="
                                                text-2xl
                                                font-bold
                                                mt-6
                                            "
                                        >
                                            {category}
                                        </h2>

                                        <p
                                            className="
                                                text-gray-500
                                                mt-3
                                            "
                                        >
                                            Browse
                                            {" "}
                                            {count}
                                            {" "}
                                            products
                                        </p>

                                    </div>

                                </Link>

                            )
                        )
                    }

                </div>

                {/* NO RESULTS */}

                {
                    filteredCategories.length === 0 && (

                        <div
                            className="
                                text-center
                                mt-20
                            "
                        >

                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    text-gray-600
                                "
                            >
                                No Categories Found
                            </h2>

                        </div>

                    )
                }

            </div>

        </div>
    );
}

export default Categories;