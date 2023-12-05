import { Product } from "@/types";

export const selectProductsCount = (rootReducer: any) => {
  return rootReducer.cartSlice.products.reduce(
    (acc: number, curr: Product) => acc + curr.quantity!,
    0
  );
};

export const selectTotalPrice = (rootReducer: any) => {
  return rootReducer.cartSlice.products.reduce(
    (acc: number, curr: Product) => acc + curr.price * curr.quantity!,
    0
  );
};
