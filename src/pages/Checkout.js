import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();

  console.log('Cart in Checkout:', cart);  // Log cart to check if data is passed correctly

  const total = cart.reduce((acc, item) => {
    if (item.price && item.quantity) {
      if (typeof item.price === 'number' && typeof item.quantity === 'number') {
        return acc + item.price * item.quantity;
      } else {
        console.warn('Invalid price or quantity for item:', item);
      }
    } else {
      console.warn('Missing price or quantity for item:', item);
    }
    return acc;
  }, 0);

  const handlePayment = () => {
    alert('Payment successful!');
    clearCart();
    window.location.href = '/';
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button className="cancel-button" onClick={() => window.location.href = '/cart'}>Cancel</button>
      <button className="pay-button" onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Checkout;
