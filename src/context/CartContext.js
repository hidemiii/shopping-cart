import React, { createContext, useContext, useState } from 'react';

// Create context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Add product to the cart
  const addToCart = (product) => {
    console.log('Adding product to cart:', product);  // Log the product to ensure it has the right properties
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If product is not in cart, add it with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, toggleSidebar, isSidebarVisible, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
