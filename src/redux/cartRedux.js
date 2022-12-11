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
      state.quantity = state.products.length;
    },
    deleteProduct: (state, action) => {
      state.products.splice(action.payload, 1);
      state.total = state.products.reduce((accumulator, object) => accumulator + (object.price * object.quantity), 0);
      state.quantity = state.products.length;
    },
    resetCart: (state) => {
      state.products = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  resetCart,
} = cartSlie.actions;
export default cartSlie.reducer;
