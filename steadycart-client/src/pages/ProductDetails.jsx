import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        axios
            .get(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
            .then((res) => {

                setProduct(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, [id]);

    if (!product) {

        return <h2>Loading...</h2>;

    }

    return (

        <div
            style={{
                padding: "40px",
                maxWidth: "1200px",
                margin: "auto"
            }}
        >

            <div
                style={{
                    display: "flex",
                    gap: "40px",
                    flexWrap: "wrap"
                }}
            >

                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        width: "450px",
                        borderRadius: "15px"
                    }}
                />

                <div>

                    <h1>{product.name}</h1>

                    <p
                        style={{
                            color: "#666",
                            marginTop: "15px"
                        }}
                    >
                        {product.description}
                    </p>

                    <h2
                        style={{
                            color: "green",
                            marginTop: "20px"
                        }}
                    >
                        ₹{product.price}
                    </h2>

                    <p>
                        Category:
                        {" "}
                        {product.category}
                    </p>

                    <p>
                        Rating:
                        {" "}
                        {product.rating}
                    </p>

                    <p>
                        Stock:
                        {" "}
                        {product.stock}
                    </p>

                    <button
                        style={{
                            marginTop: "20px",
                            padding: "12px 30px",
                            background: "#111",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer"
                        }}
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;