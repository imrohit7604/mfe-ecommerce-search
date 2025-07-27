import React from 'react';
import "./App.css";
import Search from './components/Search';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search MFE (Standalone)</h1>
      <Search onAddToCart={(item) => console.log('Add to cart:', item)} />
    </div>
  );
};

export default App;
