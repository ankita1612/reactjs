import React from 'react';
import CartSummary from './components/CartSummary';
import CartBadge from './components/CartBadge'
import ProductList from './components/ProductList';
import CartList from './components/CartList';
function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 500 },
    { id: 2, name: 'Headphones', price: 100 },
    { id: 3, name: 'Keyboard', price: 50 },
  ];

  return (
    <div style={{ padding: 20 }}>
      {/* Product List Component */}
      <ProductList products={products} />
      <hr />
      <CartList />
      <hr />

      {/* Cart Summary Component */}
      <CartSummary />
      <hr />
      <CartBadge/>

    </div>
  );
}

export default App;