import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Retailer from "./pages/Retailer";
import ProductManagement
from "./retailer/ProductManagement";
import EditProduct
from "./retailer/EditProduct";
// import Orders
// from "./retailer/Orders";
import Checkout
from "./pages/Checkout";
import RetailerLogin
from "./pages/RetailerLogin";
import ProtectedRoute
from "./components/ProtectedRoute";
import Analytics
from "./retailer/Analytics";
import AddProduct
from "./retailer/AddProduct";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";

function App() {

    return (

        <div>

            {/* NAVBAR */}
{/*  */}


            {/* ROUTES */}

            <Routes>
                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />
                <Route
                    path="/categories"
                    element={<Categories />}
                />

                <Route
                    path="/category/:category"
                    element={<CategoryProducts />}
                />
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/retailer/analytics"
                    element={<Analytics />}
                />
                <Route
                   path="/cart"
                   element={<Cart />}
                />
                <Route
                    path="/retailer"
                    element={

                        <ProtectedRoute>

                            <Retailer />

                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/retailer/products"
                    element={<ProductManagement />}
                />
                <Route
                    path="/retailer/edit/:id"
                    element={<EditProduct />}
                />
                {/* <Route
                    path="/retailer/orders"
                    element={<Orders />}
                /> */}
                <Route
                    path="/checkout"
                    element={<Checkout />}
                />
                <Route
                    path="/retailer-login"
                    element={<RetailerLogin />}
                />  
                <Route
                    path="/retailer/add-product"
                    element={<AddProduct />}
                />
            </Routes>

        </div>
    );
}

export default App;