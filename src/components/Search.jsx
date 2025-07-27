import React from 'react';
import "./Search.css";
const Search = ({ onAddToCart }) => {
  const products = ['Shoes', 'Hat', 'Watch'];

  return (
    <div className="search-container">
      <h2 className="search-title">🔍 Search Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product} className="product-item">
            <span className="product-name">{product}</span>
            <button
              className="add-to-cart-btn"
              onClick={() => onAddToCart(product)}
            >
              <span className="cart-icon" role="img" aria-label="cart"></span> Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
