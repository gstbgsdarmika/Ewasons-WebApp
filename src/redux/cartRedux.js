/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cartSlie = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlie.actions;
export default cartSlie.reducer;
