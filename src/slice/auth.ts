import { createSlice } from '@reduxjs/toolkit';
import { authTest } from '../actions/auth';

export interface AuthState {
  authTestLoading: boolean;
  authTestDone: boolean;
  authTestError: Error | null;
  authData: {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  };
}

export const initialState: AuthState = {
  authTestLoading: false,
  authTestDone: false,
  authTestError: null,
  authData: {
    brand: '',
    category: '',
    description: '',
    discountPercentage: 0,
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: '',
    title: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // plus: (state) => {
    //   state.value += 1;
    // },
    // minus: (state) => {
    //   state.value -= 1;
    // },
  },
  extraReducers: (builder) =>
    builder
      // authTest
      .addCase(authTest.pending, (state) => {
        state.authTestLoading = true;
        state.authTestDone = false;
        state.authTestError = null;
      })
      .addCase(authTest.fulfilled, (state, action) => {
        state.authTestLoading = false;
        state.authTestDone = true;
        state.authData = action.payload;
      })
      .addCase(authTest.rejected, (state, action: any) => {
        state.authTestLoading = false;
        state.authTestError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

// export const { plus, minus } = authSlice.actions;
export default authSlice;
