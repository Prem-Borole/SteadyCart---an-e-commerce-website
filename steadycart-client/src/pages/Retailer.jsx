import { Link } from "react-router-dom";

function Retailer() {

    return (

        <div className="flex min-h-screen">

            {/* SIDEBAR */}

            <div
                className="
                    w-72
                    bg-black
                    text-white
                    p-6
                "
            >

                <h1
                    className="
                        text-3xl
                        font-bold
                        mb-10
                    "
                >
                    Retailer
                </h1>

                <div className="space-y-4">

                    <Link
                        to="/retailer"
                        className="block"
                    >
                        Dashboard
                    </Link>
                   
                    <Link
                        to="/retailer/products"
                        className="block"
                    >
                        Products
                    </Link>

                

                    <Link
                        to="/retailer/analytics"
                        className="block"
                    >
                        Analytics
                    </Link>

                </div>

            </div>

            {/* CONTENT */}

            <div
                className="
                    flex-1
                    bg-gray-100
                    p-10
                "
            >

                <h1
                    className="
                        text-5xl
                        font-bold
                        mb-10
                    "
                >
                    Dashboard
                </h1>

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-4
                        gap-6
                    "
                >

                    <div
                        className="
                            bg-white
                            rounded-2xl
                            p-6
                            shadow
                        "
                    >
                        <h3>Products</h3>

                        <p
                            className="
                                text-4xl
                                font-bold
                            "
                        >
                            25
                        </p>
                    </div>

                    <div
                        className="
                            bg-white
                            rounded-2xl
                            p-6
                            shadow
                        "
                    >
                        <h3>Orders</h3>

                        <p
                            className="
                                text-4xl
                                font-bold
                            "
                        >
                            124
                        </p>
                    </div>

                    <div
                        className="
                            bg-white
                            rounded-2xl
                            p-6
                            shadow
                        "
                    >
                        <h3>Revenue</h3>

                        <p
                            className="
                                text-4xl
                                font-bold
                            "
                        >
                            ₹50K
                        </p>
                    </div>

                    <div
                        className="
                            bg-white
                            rounded-2xl
                            p-6
                            shadow
                        "
                    >
                        <h3>Low Stock</h3>

                        <p
                            className="
                                text-4xl
                                font-bold
                                text-red-500
                            "
                        >
                            3
                        </p>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default Retailer;
