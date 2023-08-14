import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice'; // Assuming you have a userSlice.js file with a userReducer
import UserReducer from './Slices/UserSlice'; // Assuming you have a userSlice.js file with a userReducer


// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add other reducers here if needed
    user : UserReducer,
  },
});

export default store;
