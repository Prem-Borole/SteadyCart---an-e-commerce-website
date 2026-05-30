import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RetailerLogin() {

    const navigate =
        useNavigate();

    const [email,
        setEmail] =
        useState("");

    const [password,
        setPassword] =
        useState("");

    const login =
        async () => {

            try {

                const res =
                    await axios.post(

                        `${import.meta.env.VITE_API_URL}/api/retailer/login`,

                        {
                            email,
                            password
                        }
                    );

                localStorage.setItem(

                    "token",

                    res.data.token
                );

                alert(
                    "Login Success"
                );

                navigate(
                    "/retailer"
                );

            } catch {

                alert(
                    "Login Failed"
                );
            }
        };

    return (

        <div
            className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gray-100
            "
        >

            <div
                className="
                    bg-white
                    p-8
                    rounded-2xl
                    shadow
                    w-96
                "
            >

                <h1
                    className="
                        text-3xl
                        font-bold
                        mb-6
                    "
                >
                    Retailer Login
                </h1>

                <input

                    placeholder="Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }

                    className="
                        border
                        p-3
                        w-full
                        mb-4
                    "
                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }

                    className="
                        border
                        p-3
                        w-full
                        mb-4
                    "
                />

                <button

                    onClick={login}

                    className="
                        bg-black
                        text-white
                        w-full
                        py-3
                        rounded-xl
                    "
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default RetailerLogin;