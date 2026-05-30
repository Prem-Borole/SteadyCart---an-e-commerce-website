import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CategoryProducts() {

    const { category } = useParams();

    const [products, setProducts] = useState([]);

    const [sortOption, setSortOption] =
        useState("");

    const [minPrice, setMinPrice] =
        useState("");

    const [maxPrice, setMaxPrice] =
        useState("");

    useEffect(() => {

        fetchProducts();

    }, [category]);

    const fetchProducts = async () => {

        try {

            const res = await axios.get(
                "import.meta.env.VITE_API_URL/api/products"
            );

            const filtered =
                res.data.filter(

                    product =>
                        product.category
                            .toLowerCase()
                            ===
                        category.toLowerCase()
                );

            setProducts(filtered);

        } catch (error) {

            console.log(error);
        }
    };

    let filteredProducts = [...products];

    // MIN PRICE

    if (minPrice) {

        filteredProducts =
            filteredProducts.filter(

                product =>
                    product.price >=
                    Number(minPrice)
            );
    }

    // MAX PRICE

    if (maxPrice) {

        filteredProducts =
            filteredProducts.filter(

                product =>
                    product.price <=
                    Number(maxPrice)
            );
    }

    // SORTING

    if (sortOption === "low-high") {

        filteredProducts.sort(

            (a, b) =>
                a.price - b.price
        );
    }

    if (sortOption === "high-low") {

        filteredProducts.sort(

            (a, b) =>
                b.price - a.price
        );
    }

    if (sortOption === "rating") {

        filteredProducts.sort(

            (a, b) =>
                b.rating - a.rating
        );
    }

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            {/* HEADER */}

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-5xl font-bold">

                    {category}

                </h1>

                <Link to="/categories">

                    <button
                        className="
                            bg-black
                            text-white
                            px-5
                            py-3
                            rounded-xl
                        "
                    >
                        Back
                    </button>

                </Link>

            </div>

            {/* FILTER BAR */}

            <div
                className="
                    bg-white
                    rounded-2xl
                    shadow
                    p-6
                    mb-10
                    flex
                    flex-wrap
                    gap-4
                "
            >

                {/* SORT */}

                <select

                    value={sortOption}

                    onChange={(e) =>
                        setSortOption(
                            e.target.value
                        )
                    }

                    className="
                        border
                        p-3
                        rounded-xl
                    "
                >

                    <option value="">
                        Sort Products
                    </option>

                    <option value="low-high">
                        Price Low → High
                    </option>

                    <option value="high-low">
                        Price High → Low
                    </option>

                    <option value="rating">
                        Rating High → Low
                    </option>

                </select>

                {/* MIN PRICE */}

                <input

                    type="number"

                    placeholder="Min Price"

                    value={minPrice}

                    onChange={(e) =>
                        setMinPrice(
                            e.target.value
                        )
                    }

                    className="
                        border
                        p-3
                        rounded-xl
                    "
                />

                {/* MAX PRICE */}

                <input

                    type="number"

                    placeholder="Max Price"

                    value={maxPrice}

                    onChange={(e) =>
                        setMaxPrice(
                            e.target.value
                        )
                    }

                    className="
                        border
                        p-3
                        rounded-xl
                    "
                />

            </div>

            {/* PRODUCTS */}

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
                    filteredProducts.map(
                        (product) => (

                            <div

                                key={product._id}

                                className="
                                    bg-white
                                    rounded-2xl
                                    overflow-hidden
                                    shadow-lg
                                    hover:shadow-2xl
                                    transition
                                "
                            >

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="
                                        w-full
                                        h-64
                                        object-cover
                                    "
                                />

                                <div className="p-5">

                                    <h2
                                        className="
                                            text-xl
                                            font-bold
                                        "
                                    >
                                        {product.name}
                                    </h2>

                                    <p
                                        className="
                                            text-gray-500
                                            mt-2
                                        "
                                    >
                                        {product.description}
                                    </p>

                                    <div
                                        className="
                                            flex
                                            justify-between
                                            items-center
                                            mt-5
                                        "
                                    >

                                        <h3
                                            className="
                                                text-2xl
                                                font-bold
                                                text-green-600
                                            "
                                        >
                                            ₹{product.price}
                                        </h3>

                                        <span>
                                            ⭐ {product.rating}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>
    );
}

export default CategoryProducts;