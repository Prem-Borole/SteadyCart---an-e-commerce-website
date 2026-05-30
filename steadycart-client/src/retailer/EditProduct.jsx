import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProduct() {

    const { id } = useParams();

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

    useEffect(() => {

        fetchProduct();

    }, []);

    const fetchProduct = async () => {

        const res = await axios.get(
            `import.meta.env.VITE_API_URL/api/products/${id}`
        );

        setProduct(res.data);
    };

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.put(
            `import.meta.env.VITE_API_URL/api/products/${id}`,
            product
        );

        alert("Product Updated");

        navigate("/retailer/products");
    };

    return (

        <div className="p-10">

            <h1 className="text-4xl font-bold mb-8">
                Edit Product
            </h1>

            <form
                onSubmit={handleSubmit}
                className="
                    bg-white
                    p-8
                    rounded-2xl
                    shadow
                    max-w-xl
                "
            >

                <input
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="
                        border
                        p-3
                        w-full
                        mb-4
                    "
                />

                <input
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="
                        border
                        p-3
                        w-full
                        mb-4
                    "
                />

                <input
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    placeholder="Stock"
                    className="
                        border
                        p-3
                        w-full
                        mb-4
                    "
                />

                <button
                    className="
                        bg-green-500
                        text-white
                        px-6
                        py-3
                        rounded-xl
                    "
                >
                    Update Product
                </button>

            </form>

        </div>
    );
}

export default EditProduct;