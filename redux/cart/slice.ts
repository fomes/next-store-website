import { Product } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

interface CartStateProps {
  products: Product[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state: CartStateProps, action: PayloadAction<Product>) => {
      const productInCart = state.products.some(
        (product: Product) => product.id === action.payload.id
      );

      if (productInCart) {
        state.products = state.products.map((product: Product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity! + 1 }
            : product
        );

        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },

    increaseProductQtd: (
      state: CartStateProps,
      action: PayloadAction<String>
    ) => {
      state.products = state.products.map((product: Product) =>
        product.id === String(action.payload)
          ? { ...product, quantity: product.quantity! + 1 }
          : product
      );
    },

    decreaseProductQtd: (
      state: CartStateProps,
      action: PayloadAction<String>
    ) => {
      state.products = state.products
        .map((product) =>
          product.id === String(action.payload)
            ? { ...product, quantity: product.quantity! - 1 }
            : product
        )
        .filter((product) => product.quantity! > 0);
    },

    removeProduct: (state: CartStateProps, action: PayloadAction<String>) => {
      state.products = state.products.filter(
        (product) => product.id !== String(action.payload)
      );
    },
  },
});

export const {
  addProduct,
  increaseProductQtd,
  decreaseProductQtd,
  removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
