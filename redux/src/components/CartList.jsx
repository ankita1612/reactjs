// CartList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../cartSlice';

function CartList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div style={{ marginTop: 20, border: '1px solid #ccc', padding: 10, borderRadius: 5 }}>
      <h2>Cart</h2>
      {cart.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item.id} style={{ marginBottom: 5 }}>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{ marginLeft: 10 }}
              >
                −
              </button>
            </div>
          ))}
          <h3>Total: ${cart.items.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default CartList;
