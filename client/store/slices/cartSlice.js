import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Set initial state to an empty array
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items]; // Spread the existing items array
      let itemIndex = state.items.findIndex(
        (item) => item._id === action.payload.id
      );
      // checking to see if item exists
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log(`Can't remove an item that is not in the cart.`);
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      // clearing the cart
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
// get the cart items
export const selectCartItems = (state) => state.cart.items;
// get a particular cart item
export const selectCartItemsById = (state, id) =>
  state.cart.items.filter((item) => item._id === id);
// cart total
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);
// total item count
export const selectCartCount = (state) => state.cart.items.length;

export default cartSlice.reducer;
