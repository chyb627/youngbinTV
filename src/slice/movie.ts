import { createSlice } from '@reduxjs/toolkit';
import { authTest, movieNowPlaying, movieDetail } from '../actions/movie';

export interface movieState {
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
  movieNowPlayingLoading: boolean;
  movieNowPlayingDone: boolean;
  movieNowPlayingError: Error | null;
  movieNowPlayingData: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number | null;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number | null;
    vote_count: number | null;
  }[];
  movieDetailLoading: boolean;
  movieDetailDone: boolean;
  movieDetailError: Error | null;
  movieDetailData: any;
}

export const initialState: movieState = {
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
  movieNowPlayingLoading: false,
  movieNowPlayingDone: false,
  movieNowPlayingError: null,
  movieNowPlayingData: [],
  movieDetailLoading: false,
  movieDetailDone: false,
  movieDetailError: null,
  movieDetailData: {},
};

export const movieSlice = createSlice({
  name: 'movie',
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
      // movieNowPlaying
      .addCase(movieNowPlaying.pending, (state) => {
        state.movieNowPlayingLoading = true;
        state.movieNowPlayingDone = false;
        state.movieNowPlayingError = null;
      })
      .addCase(movieNowPlaying.fulfilled, (state, action) => {
        state.movieNowPlayingLoading = false;
        state.movieNowPlayingDone = true;
        state.movieNowPlayingData = action.payload;
      })
      .addCase(movieNowPlaying.rejected, (state, action: any) => {
        state.movieNowPlayingLoading = false;
        state.movieNowPlayingError = action.error.message;
      })
      // movieDetail
      .addCase(movieDetail.pending, (state) => {
        state.movieDetailLoading = true;
        state.movieDetailDone = false;
        state.movieDetailError = null;
      })
      .addCase(movieDetail.fulfilled, (state, action) => {
        state.movieDetailLoading = false;
        state.movieDetailDone = true;
        state.movieDetailData = action.payload;
      })
      .addCase(movieDetail.rejected, (state, action: any) => {
        state.movieDetailLoading = false;
        state.movieDetailError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

// export const { plus, minus } = movieSlice.actions;
export default movieSlice;
