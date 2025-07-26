import React from 'react';

const Search = ({ onAddToCart }) => {
  const products = ['Shoes', 'Hat', 'Watch'];

  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold mb-2">🔍 Search Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product} className="my-1">
            {product}
            <button
              className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
