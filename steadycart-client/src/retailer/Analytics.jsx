import { useEffect, useState } from "react";
import axios from "axios";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function Analytics() {

    const [stats, setStats] = useState({
        revenue: 0,
        totalOrders: 0
    });

    useEffect(() => {

        axios
            .get(
                `${import.meta.env.VITE_API_URL}/api/analytics`
            )
            .then((res) => {

                setStats(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    const data = [
        { month: "Jan", sales: 12000 },
        { month: "Feb", sales: 18000 },
        { month: "Mar", sales: 15000 },
        { month: "Apr", sales: 25000 },
        { month: "May", sales: 30000 }
    ];

    return (

        <div className="p-10 bg-gray-100 min-h-screen">

            <h1
                className="
                    text-4xl
                    font-bold
                    mb-8
                "
            >
                Sales Analytics
            </h1>

            {/* STATS CARDS */}

            <div
                className="
                    grid
                    md:grid-cols-4
                    gap-6
                    mb-10
                "
            >

                <div
                    className="
                        bg-white
                        p-6
                        rounded-2xl
                        shadow
                    "
                >

                    <h3 className="text-gray-500">
                        Total Revenue
                    </h3>

                    <p
                        className="
                            text-3xl
                            font-bold
                            text-green-600
                        "
                    >
                        ₹{stats.revenue}
                    </p>

                </div>

                <div
                    className="
                        bg-white
                        p-6
                        rounded-2xl
                        shadow
                    "
                >

                    <h3 className="text-gray-500">
                        Total Orders
                    </h3>

                    <p
                        className="
                            text-3xl
                            font-bold
                        "
                    >
                        {stats.totalOrders}
                    </p>

                </div>

                <div
                    className="
                        bg-white
                        p-6
                        rounded-2xl
                        shadow
                    "
                >

                    <h3 className="text-gray-500">
                        Products
                    </h3>

                    <p
                        className="
                            text-3xl
                            font-bold
                        "
                    >
                        42
                    </p>

                </div>

                <div
                    className="
                        bg-white
                        p-6
                        rounded-2xl
                        shadow
                    "
                >

                    <h3 className="text-gray-500">
                        Low Stock
                    </h3>

                    <p
                        className="
                            text-3xl
                            font-bold
                            text-red-500
                        "
                    >
                        3
                    </p>

                </div>

            </div>

            {/* CHART */}

            <div
                className="
                    bg-white
                    p-6
                    rounded-2xl
                    shadow
                "
            >

                <h2
                    className="
                        text-2xl
                        font-bold
                        mb-6
                    "
                >
                    Monthly Sales
                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={400}
                >

                    <BarChart
                        data={data}
                    >

                        <XAxis
                            dataKey="month"
                        />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="sales"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default Analytics;