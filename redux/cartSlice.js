import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shopId: "",
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let { shopId, product, packs } = action.payload;
      state.shopId = shopId;
      state.products.push({ product, packs });
      state.quantity += 1;
      state.total += product.price * packs;
    },
    reset: (state) => {
      state.shopId = "";
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
