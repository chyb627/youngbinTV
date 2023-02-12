import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance, requests } from '../api/axios';

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

export const movieNowPlaying = createAsyncThunk('movie/now_playing', async (_, thunkAPI) => {
  try {
    const result = await axiosInstance.get(requests.fetchNowPlaying);
    // console.log('result::', result.data.results);

    return result.data.results;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const movieDetail = createAsyncThunk('movie/detail', async (_, thunkAPI) => {
  try {
    const res = await axiosInstance.get(requests.fetchNowPlaying);
    const movieId = res.data.results[Math.floor(Math.random() * res.data.results.length)].id;

    const result = await axiosInstance.get(`/movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });
    console.log('result::', result.data);

    return result.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
