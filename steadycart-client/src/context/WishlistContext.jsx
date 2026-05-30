import {
    createContext,
    useState
} from "react";

export const WishlistContext =
    createContext();

function WishlistProvider({
    children
}) {

    const [wishlist, setWishlist] =
        useState([]);

    const addToWishlist = (
        product
    ) => {

        if (
            !wishlist.find(
                item =>
                    item._id === product._id
            )
        ) {

            setWishlist([
                ...wishlist,
                product
            ]);
        }
    };

    return (

        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export default WishlistProvider;