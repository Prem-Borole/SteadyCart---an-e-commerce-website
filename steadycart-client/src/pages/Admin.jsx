import { useState } from "react";

import axios from "axios";


function Admin() {

    const [product, setProduct] = useState({

        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
        rating: ""
    });


    const handleChange = (e) => {

        setProduct({

            ...product,

            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "import.meta.env.VITE_API_URL/api/products/add",
                product
            );

            alert("Product Added");

        } catch (error) {

            console.log(error);
        }
    };


    return (

        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

            <form
                onSubmit={handleSubmit}

                className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl"
            >

                <h1 className="text-4xl font-bold mb-8 text-center">

                    Admin Dashboard

                </h1>


                <div className="grid gap-5">

                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        onChange={handleChange}

                        className="border p-4 rounded-xl"
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}

                        className="border p-4 rounded-xl"
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}

                        className="border p-4 rounded-xl"
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        onChange={handleChange}

                        className="border p-4 rounded-xl"
                    />

                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        onChange={handleChange}

                        className="border p-4 rounded-xl"
                    />

                    <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        onChange={handleChange}

                        className="border p-4 rounded-xl"
                    />

                    <input
                        type="number"
                        step="0.1"
                        name="rating"
                        placeholder="Rating"
                        onChange={handleChange}

                        className="border p-4 rounded-xl"
                    />

                    <button
                        type="submit"

                        className="bg-black text-white py-4 rounded-xl text-xl hover:bg-gray-800 transition"
                    >
                        Add Product
                    </button>

                </div>

            </form>

        </div>
    );
}

export default Admin;