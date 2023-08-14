// configureStore.js
import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './Slices/cartSlice';
import UserReducer from './Slices/UserSlice';
import Filtersclice from './Slices/Filteritems';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    cart: cartReducer,
    user: UserReducer,
    filter: Filtersclice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store); // Export the persistor

export { store, persistor }; // Export both the store and persistor
