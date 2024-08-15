import React, { useState, createContext } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

function APPContext({ children }) {
    const [loading, setLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [noOfItems, setNoOfItems] = useState(0);
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            setData(data);
            setLoading(false);
            return data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    function addToCart(item) {
        toast.success('Item added to cart');
        setCart([...cart, item]);
        setTotalPrice(totalPrice + item.price);
        setNoOfItems(noOfItems + 1);
    }

    function removeFromCart(item) {
        toast.error('Item removed from cart');
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(newCart);
        setTotalPrice(totalPrice - item.price);
        setNoOfItems(noOfItems - 1);
    }

    const contextValue = {
        loading,
        totalPrice,
        noOfItems,
        cart,
        fetchData,
        addToCart,
        removeFromCart,
        data,
        setData
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export { APPContext, Context };
