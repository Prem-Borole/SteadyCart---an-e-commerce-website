import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

const data = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 }
];

function Dashboard() {
    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" />
        </LineChart>
    );
}

export default Dashboard;