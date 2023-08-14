import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchdata = createAsyncThunk("fetchdata", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchdata.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchdata.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchdata.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default UserSlice.reducer;