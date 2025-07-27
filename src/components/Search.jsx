import React from 'react';

const Search = ({ onAddToCart }) => {
  const products = ['Shoes', 'Hat', 'Watch'];

  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold mb-4">🔍 Search Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product} className="my-1 product-list-item">
            <span className="product-name">{product}</span>
            <button
              className="add-btn"
              onClick={() => onAddToCart(product)}
            >
              <span role="img" aria-label="cart">🛒</span> Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
