import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: string;
  // Add other properties as needed
  count: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemId = action.payload._id;
      const existingItem = state.items.find((item) => item._id === itemId);

      if (existingItem) {
        // If item already exists, increase the count
        existingItem.count = (existingItem.count || 1) + 1;
      } else {
        // If item doesn't exist, add it with count 1
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const itemId = action.payload.id;
      const itemIndex = state.items.findIndex((item) => item._id === itemId);

      // checking to see if item exists
      if (itemIndex >= 0) {
        const existingItem = state.items[itemIndex];
        if (existingItem.count > 1) {
          // If count is greater than 1, decrease the count
          existingItem.count -= 1;
        } else {
          // If count is 1, remove the item from the cart
          state.items.splice(itemIndex, 1);
        }
      } else {
        console.log(`Can't remove an item that is not in the cart.`);
      }
    },
    emptyCart: (state) => {
      // clearing the cart
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
// get the cart items
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
// get a particular cart item
export const selectCartItemsById = (state: { cart: CartState }, id: string) =>
  state.cart.items.filter((item) => item._id === id);
// cart total
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + (item.count || 1) * item.price, 0);
// total item count
export const selectCartCount = (state: { cart: CartState }) => state.cart.items.length;

export default cartSlice.reducer;
