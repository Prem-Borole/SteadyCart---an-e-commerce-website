import { useState } from "react";
import axios from "axios";

function AddProduct() {

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
                `${import.meta.env.VITE_API_URL}/api/products/add`,
                product
            );

            alert("Product Added");

        } catch (error) {

            console.log(error);
        }
    };


    return (

        <div
            style={{
                padding: "40px"
            }}
        >

            <h1>Add Product</h1>

            <form
                onSubmit={handleSubmit}

                style={{
                    display: "grid",
                    gap: "15px",
                    maxWidth: "500px"
                }}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    onChange={handleChange}
                />

                <button type="submit">
                    Add Product
                </button>

            </form>

        </div>
    );
}

export default AddProduct;