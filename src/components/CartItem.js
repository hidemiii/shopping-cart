// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart }) => (
  <div className="cart-item">
    <img src={item.images[0]} alt={item.title} />
    <h4>{item.title}</h4>
    <p>${item.price} x {item.quantity}</p>
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
);

export default CartItem;
