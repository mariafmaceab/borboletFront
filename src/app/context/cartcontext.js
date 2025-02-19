"use client"
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false)

    const addToCart = (item, quantity) => {
        const validQuantity = Math.max(1, Math.min(quantity, 5));
    
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
    
            if (existingItem) {
                const newQuantity = Math.min(existingItem.quantity + validQuantity, 5);
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: newQuantity }
                        : cartItem
                );
            }
    
            return [...prevCart, { ...item, quantity: validQuantity }];
        });

        setIsCartOpen(true)
    };

    const removeOneFromCart = (id) => {
        setCart((prevCart) => {
            return prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                    : item
            ).filter(item => item.quantity > 0);
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, clearCart, removeOneFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);