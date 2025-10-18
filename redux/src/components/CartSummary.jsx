// CartSummary.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalItems, selectTotalAmount } from '../cartSlice';

function CartSummary() {
  const totalItems = useSelector(selectTotalItems);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div style={{ border: '1px solid #ccc', padding: 15, margin: 15, borderRadius: 5 }}>
      <h3>🛒 Cart Summary cartSummary.jsx</h3>
      <p>Total Items: {totalItems}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
}

export default CartSummary;
