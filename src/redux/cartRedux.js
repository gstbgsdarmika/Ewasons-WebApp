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
      state.products.push(action.payload);
      state.total = state.products.reduce((accumulator, object) => accumulator + (object.price * object.quantity), 0);
      console.log(`panjang${state.products.length}`);
      state.quantity = state.products.length;
    },
    deleteProduct: (state, action) => {
      state.products.splice(action.payload, 1);
      state.total = state.products.reduce((accumulator, object) => accumulator + (object.price * object.quantity), 0);
      console.log(`panjang${state.products.length}`);
      state.quantity = state.products.length;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
} = cartSlie.actions;
export default cartSlie.reducer;
