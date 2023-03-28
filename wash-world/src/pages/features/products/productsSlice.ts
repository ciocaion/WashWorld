// Import the createSlice function from Redux Toolkit and the RootState type from the store file
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define the shape of the Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  program: string;
  estimated_duration: string;
}

// Define the shape of the ProductState interface
interface ProductState {
  selectedProduct: Product | null;
}

// Set the initial state of the product slice
const initialState: ProductState = {
  selectedProduct: null,
};

// Create a slice of the Redux store called 'product'
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Add a reducer function called 'setSelectedProduct' to the slice
    setSelectedProduct: (state, action) => {
      // Update the state of the selectedProduct field with the payload of the action
      state.selectedProduct = action.payload;
    },
  },
});

// Export the setSelectedProduct reducer action for use in other parts of the application
export const { setSelectedProduct } = productSlice.actions;

// Export a selector function that retrieves the selectedProduct field from the Redux store's 'product' slice
export const selectSelectedProduct = (state: RootState) => state.product.selectedProduct;

// Export the product slice reducer as the default export of this file
export default productSlice.reducer;
