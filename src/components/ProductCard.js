import React from 'react';

const ProductCard = ({ product, addToCart, toggleSidebar }) => {
  const handleAddToCart = () => {
    addToCart(product);  // Add the product to the cart
    toggleSidebar();     // Open the sidebar (cart)
  };

  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
