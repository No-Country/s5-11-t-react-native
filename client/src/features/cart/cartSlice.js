import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(...action.payload);
      console.log(state, " estado redux");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
