import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {

    const navigate = useNavigate();

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

            [e.target.name]:
                e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "http://localhost:5000/api/products/add",

                product
            );

            alert(
                "Product Added Successfully"
            );

            navigate(
                "/retailer/products"
            );

        } catch (error) {

            console.log(error);

            alert(
                "Failed To Add Product"
            );
        }
    };

    return (

        <div className="p-10">

            <h1
                className="
                    text-4xl
                    font-bold
                    mb-8
                "
            >
                Add Product
            </h1>

            <form
                onSubmit={handleSubmit}
                className="
                    bg-white
                    rounded-2xl
                    shadow
                    p-8
                    max-w-2xl
                "
            >

                <input
                    name="name"
                    placeholder="Product Name"
                    onChange={handleChange}
                    className="border p-3 w-full mb-4"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    className="border p-3 w-full mb-4"
                />

                <input
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    className="border p-3 w-full mb-4"
                />

                <input
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                    className="border p-3 w-full mb-4"
                />

                <input
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                    className="border p-3 w-full mb-4"
                />

                <input
                    name="stock"
                    placeholder="Stock"
                    onChange={handleChange}
                    className="border p-3 w-full mb-4"
                />

                <button
                    className="
                        bg-green-500
                        text-white
                        px-8
                        py-3
                        rounded-xl
                    "
                >
                    Add Product
                </button>

            </form>

        </div>
    );
}

export default AddProduct;