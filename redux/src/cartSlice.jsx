// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // {id, name, price, quantity}
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...item, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (!item) return;
      if (item.quantity === 1) state.items = state.items.filter(i => i.id !== id);
      else item.quantity -= 1;
    },
    clearCart: (state) => { state.items = []; },
  },
});

// Actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Selector: total number of items
export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Selector: total amount
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
