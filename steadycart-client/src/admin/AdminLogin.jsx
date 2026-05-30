import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleLogin = (e) => {

        e.preventDefault();

        // SIMPLE STATIC LOGIN

        if (
            email === "admin@gmail.com"
            &&
            password === "admin123"
        ) {

            localStorage.setItem("admin", true);

            navigate("/admin/dashboard");

        } else {

            alert("Invalid Credentials");
        }
    };


    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#111"
            }}
        >

            <form
                onSubmit={handleLogin}

                style={{
                    background: "white",
                    padding: "40px",
                    borderRadius: "15px",
                    width: "350px"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "30px"
                    }}
                >
                    Admin Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "20px"
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "20px"
                    }}
                />

                <button
                    type="submit"

                    style={{
                        width: "100%",
                        padding: "15px",
                        background: "#222",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>

            </form>

        </div>
    );
}

export default AdminLogin;