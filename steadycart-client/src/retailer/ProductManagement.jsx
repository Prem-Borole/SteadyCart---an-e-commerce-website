import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductManagement() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/products`
            );

            setProducts(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const deleteProduct = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/products/${id}`
            );

            fetchProducts();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            {/* HEADER */}

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        Product Management

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Manage all products from here

                    </p>

                </div>

                <Link
                    to="/retailer/add-product"
                >

                    <button
                        className="
                            bg-green-500
                            hover:bg-green-600
                            text-white
                            px-6
                            py-3
                            rounded-xl
                            font-semibold
                            shadow
                        "
                    >
                        + Add Product
                    </button>

                </Link>

            </div>

            {/* TABLE */}

            <div
                className="
                    bg-white
                    rounded-2xl
                    shadow-lg
                    overflow-hidden
                "
            >

                <table className="w-full">

                    <thead>

                        <tr
                            className="
                                bg-black
                                text-white
                            "
                        >

                            <th className="p-4 text-left">

                                Product

                            </th>

                            <th>

                                Category

                            </th>

                            <th>

                                Price

                            </th>

                            <th>

                                Stock

                            </th>

                            <th>

                                Rating

                            </th>

                            <th>

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            products.length === 0
                            ?
                            (
                                <tr>

                                    <td
                                        colSpan="6"
                                        className="
                                            text-center
                                            p-10
                                            text-gray-500
                                        "
                                    >
                                        No Products Found

                                    </td>

                                </tr>
                            )
                            :
                            (
                                products.map(product => (

                                    <tr
                                        key={product._id}
                                        className="
                                            border-b
                                            hover:bg-gray-50
                                        "
                                    >

                                        <td className="p-4">

                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={
                                                        product.image ||
                                                        "https://via.placeholder.com/80"
                                                    }
                                                    alt={product.name}
                                                    className="
                                                        w-16
                                                        h-16
                                                        rounded-lg
                                                        object-cover
                                                    "
                                                />

                                                <span className="font-semibold">

                                                    {product.name}

                                                </span>

                                            </div>

                                        </td>

                                        <td>

                                            {product.category}

                                        </td>

                                        <td>

                                            ₹{product.price}

                                        </td>

                                        <td>

                                            {
                                                product.stock <= 5
                                                ?
                                                (
                                                    <span
                                                        className="
                                                            text-red-500
                                                            font-bold
                                                        "
                                                    >
                                                        {product.stock}
                                                    </span>
                                                )
                                                :
                                                (
                                                    product.stock
                                                )
                                            }

                                        </td>

                                        <td>

                                            ⭐ {product.rating}

                                        </td>

                                        <td>

                                            <div className="flex gap-2 justify-center">

                                                <Link
                                                    to={`/retailer/edit/${product._id}`}
                                                >

                                                    <button
                                                        className="
                                                            bg-blue-500
                                                            hover:bg-blue-600
                                                            text-white
                                                            px-4
                                                            py-2
                                                            rounded-lg
                                                        "
                                                    >
                                                        Edit
                                                    </button>

                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteProduct(
                                                            product._id
                                                        )
                                                    }
                                                    className="
                                                        bg-red-500
                                                        hover:bg-red-600
                                                        text-white
                                                        px-4
                                                        py-2
                                                        rounded-lg
                                                    "
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))
                            )
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default ProductManagement;