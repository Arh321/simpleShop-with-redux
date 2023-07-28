
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    cleare: (state) =>{
      const copy = state.cartItems.map((item) => item.amount == 1)
      state.cartItems = [...copy]
      state.amount = 0
      state.total = 0
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1; 
  },
  decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
      
  },
  calculateTotalsPlus: (state , { payload }) => {
    const cartItem = state.cartItems.find((item) => item.id === payload.id);
    state.total = +state.total + +cartItem.price
  },
  calculateTotalsMines: (state , { payload }) => {
    const cartItem = state.cartItems.find((item) => item.id === payload.id);
    state.total = +state.total - +cartItem.price
  },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  }
});


export const { increase , decrease , cleare , calculateTotalsPlus,calculateTotalsMines} = cartSlice.actions;
export default cartSlice.reducer;