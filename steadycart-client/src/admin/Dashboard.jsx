import { Link } from "react-router-dom";

function Dashboard() {

    return (

        <div
            style={{
                display: "flex",
                minHeight: "100vh"
            }}
        >

            {/* SIDEBAR */}

            <div
                style={{
                    width: "250px",
                    background: "#111",
                    color: "white",
                    padding: "30px"
                }}
            >

                <h2>Admin Panel</h2>

                <nav
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "40px"
                    }}
                >

                    <Link
                        to="/admin/add-product"
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        Add Product
                    </Link>

                    <Link
                        to="/admin/products"
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        Manage Products
                    </Link>

                </nav>

            </div>


            {/* MAIN */}

            <div
                style={{
                    flex: 1,
                    padding: "40px"
                }}
            >

                <h1>Dashboard</h1>

                <p>Welcome Admin</p>

            </div>

        </div>
    );
}

export default Dashboard;