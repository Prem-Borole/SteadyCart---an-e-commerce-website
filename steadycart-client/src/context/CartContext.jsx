import {
    createContext,
    useState,
    useEffect
} from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {

        const savedCart =
            localStorage.getItem("cart");

        return savedCart
            ? JSON.parse(savedCart)
            : [];
    });

    useEffect(() => {

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }, [cart]);

    // ADD TO CART
const addToCart = (product) => {

    const existingProduct = cart.find(
        item => item._id === product._id
    );

    if (existingProduct) {

        if (
            existingProduct.quantity >= product.stock
        ) {

            alert(
                `Only ${product.stock} items available in stock`
            );

            return;
        }

        setCart(
            cart.map(item =>
                item._id === product._id
                    ? {
                        ...item,
                        quantity:
                            item.quantity + 1
                    }
                    : item
            )
        );

    } else {

        if (product.stock <= 0) {

            alert("Product Out Of Stock");

            return;
        }

        setCart([
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ]);
    }
};
    // REMOVE PRODUCT

    const removeFromCart = (id) => {

        setCart(
            cart.filter(
                item => item._id !== id
            )
        );
    };

    // INCREASE QUANTITY
const increaseQuantity = (id) => {

    setCart(
        cart.map(item => {

            if (item._id !== id)
                return item;

            if (
                item.quantity >= item.stock
            ) {

                alert(
                    `Maximum stock reached (${item.stock})`
                );

                return item;
            }

            return {
                ...item,
                quantity:
                    item.quantity + 1
            };
        })
    );
};

    // DECREASE QUANTITY

    const decreaseQuantity = (id) => {

        setCart(
            cart
                .map(item =>
                    item._id === id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity - 1
                          }
                        : item
                )
                .filter(
                    item => item.quantity > 0
                )
        );
    };

    // CLEAR CART

    const clearCart = () => {

        setCart([]);
    };

    return (

        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart
            }}
        >

            {children}

        </CartContext.Provider>
    );
}

export default CartProvider;