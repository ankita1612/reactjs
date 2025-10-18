// CartBadge.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../cartSlice';

function CartBadge() {
  const totalItems = useSelector(selectTotalItems);

  return (
    <div style={{ padding: '10px', fontWeight: 'bold' }}>
      🛒 Cart Items CartBadge.jsx: {totalItems}
    </div>
  );
}

export default CartBadge;
