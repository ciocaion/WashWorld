import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  program: string;
  estimated_duration: string;
}

interface ProductState {
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;

export const selectSelectedProduct = (state: RootState) => state.product.selectedProduct;

export default productSlice.reducer;
