
function Orders() {

    const [orders, setOrders] =
        useState([]);

    useEffect(() => {

        fetchOrders();

    }, []);

    const fetchOrders = async () => {

        const res =
            await axios.get(
                "http://localhost:5000/api/orders"
            );

        setOrders(res.data);
    };

    const updateStatus =
        async (id, status) => {

            await axios.put(

                `http://localhost:5000/api/orders/${id}`,

                { status }
            );

            fetchOrders();
        };

    return (

        <div className="p-10">

            <h1
                className="
                    text-4xl
                    font-bold
                    mb-8
                "
            >
                Orders
            </h1>

            {
                orders.map(order => (

                    <div
                        key={order._id}

                        className="
                            bg-white
                            rounded-2xl
                            shadow
                            p-6
                            mb-4
                        "
                    >

                        <h2
                            className="
                                text-xl
                                font-bold
                            "
                        >
                            {order.customerName}
                        </h2>

                        <p>
                            {order.customerEmail}
                        </p>

                        <p>
                            Total:
                            ₹{order.total}
                        </p>

                        <p>
                            Status:
                            {" "}
                            {order.status}
                        </p>

                        <select

                            value={order.status}

                            onChange={(e) =>
                                updateStatus(
                                    order._id,
                                    e.target.value
                                )
                            }

                            className="
                                border
                                p-2
                                mt-3
                            "
                        >

                            <option>
                                Pending
                            </option>

                            <option>
                                Processing
                            </option>

                            <option>
                                Shipped
                            </option>

                            <option>
                                Delivered
                            </option>

                            <option>
                                Cancelled
                            </option>

                        </select>

                    </div>
                ))
            }

        </div>
    );
}

export default Orders;