import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { cart, removeFromCart, isSidebarVisible, clearCart } = useCart();

  if (!isSidebarVisible) return null;  // Don't render if sidebar is not visible

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-sidebar">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />)
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={() => window.location.href = '/checkout'}>Checkout</button>
      {/* Clear Cart Button */}
      <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
    </div>
  );
};

export default CartSidebar;
