import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
    </div>
  );
};

export default Cart;
