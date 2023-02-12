import { createAsyncThunk } from '@reduxjs/toolkit';

export const authTest = createAsyncThunk('auth/test', async (_, thunkAPI) => {
  try {
    const requestURL = 'https://dummyjson.com/products?limit=100';
    const res = await fetch(requestURL);
    const result = await res.json();
    // console.log('result::', result.products);

    return result.products;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
