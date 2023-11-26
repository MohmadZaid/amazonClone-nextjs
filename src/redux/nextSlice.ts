import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../../type";

interface nextState {
  productData: StoreProduct[];
  favouriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}

const initialState: nextState = {
  productData: [],
  favouriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find((item: StoreProduct) => {
        return item._id === action.payload._id;
      });
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favouriteData.find((item: StoreProduct) => {
        return item._id === action.payload._id;
      });
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favouriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.favouriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    desreaseQuantity: (state, action) => {
      const existingProduct = state.favouriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct!.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item: StoreProduct) => item._id !== action.payload
      );
    },
    resetCard: (state) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    RemoveUser: (state) => {
      state.userInfo = null;
    },
    setALlProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavorite,
  increaseQuantity,
  desreaseQuantity,
  deleteProduct,
  resetCard,
  addUser,
  RemoveUser,
  setALlProducts,
} = nextSlice.actions;
export default nextSlice.reducer;
