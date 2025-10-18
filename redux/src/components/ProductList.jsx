// ProductList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

function ProductList({ products }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          {p.name} - ${p.price}
          <button
            onClick={() => dispatch(addToCart(p))}
            style={{ marginLeft: 10 }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
