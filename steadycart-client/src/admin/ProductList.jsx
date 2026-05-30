import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {

    const [products, setProducts] = useState([]);


    const fetchProducts = async () => {

        const res = await axios.get(
            "import.meta.env.VITE_API_URL/api/products"
        );

        setProducts(res.data);
    };


    useEffect(() => {

        fetchProducts();

    }, []);


    const deleteProduct = async (id) => {

        try {

            await axios.delete(
                `import.meta.env.VITE_API_URL/api/products/${id}`
            );

            fetchProducts();

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

            <h1>Manage Products</h1>

            {
                products.map((product) => (

                    <div
                        key={product._id}

                        style={{
                            border: "1px solid #ccc",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        <h2>{product.name}</h2>

                        <p>${product.price}</p>

                        <button
                            onClick={() =>
                                deleteProduct(product._id)
                            }
                        >
                            Delete
                        </button>

                    </div>
                ))
            }

        </div>
    );
}

export default ProductList;