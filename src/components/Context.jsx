import React, { useState, createContext, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

function APPContext({ children }) {
    const [loading, setLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [noOfItems, setNoOfItems] = useState(0);
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        // avoid refetching if we already have data (helps with StrictMode double mount)
        if (data && data.length > 0) return data;

        setLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const result = await response.json();
            setData(result);
            setLoading(false);
            return result;
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [data]);

    const addToCart = useCallback((item) => {
        toast.success('Item added to cart');
        setCart(prevCart => {
            const newCart = [...prevCart, item];
            // recalculate totals from newCart to avoid drifting state
            const newTotal = newCart.reduce((sum, it) => sum + (it.price || 0), 0);
            setTotalPrice(Number(newTotal.toFixed(2)));
            setNoOfItems(newCart.length);
            return newCart;
        });
    }, []);

    const removeFromCart = useCallback((item) => {
        toast.error('Item removed from cart');
        setCart(prevCart => {
            const newCart = prevCart.filter(cartItem => cartItem.id !== item.id);
            const newTotal = newCart.reduce((sum, it) => sum + (it.price || 0), 0);
            setTotalPrice(Number(newTotal.toFixed(2)));
            setNoOfItems(newCart.length);
            return newCart;
        });
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
        setNoOfItems(0);
        setTotalPrice(0);
    }, []);

    const contextValue = useMemo(() => ({
        loading,
        totalPrice,
        noOfItems,
        cart,
        clearCart,     // Add this instead of setCart
        fetchData,
        addToCart,
        removeFromCart,
        data,
        setData
    }), [loading, totalPrice, noOfItems, cart, clearCart, fetchData, addToCart, removeFromCart, data]);

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export { APPContext, Context };
