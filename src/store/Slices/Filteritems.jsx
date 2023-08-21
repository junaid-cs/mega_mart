import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredProducts: "All",
  searchValue: '',
};

const userSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterProducts(state, action) {
      state.filteredProducts = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { filterProducts, setSearchValue } = userSlice.actions;
export default userSlice.reducer;
