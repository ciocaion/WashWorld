// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the productReducer from the productsSlice file
import productReducer from './features/products/productsSlice';

// Configure the Redux store using configureStore
const store = configureStore({
  reducer: {
    // Pass the productReducer as the reducer for the 'product' slice of the store
    product: productReducer,
  },
});

// Define two types that can be used throughout the application: RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store as the default export of this file
export default store;
