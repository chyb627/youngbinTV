import axios from 'axios';

// https://api.themoviedb.org/3?api_key=fd708c283c680946ec12a823ad56112f&language=ko-KR
export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'fd708c283c680946ec12a823ad56112f',
    language: 'ko-KR',
  },
});

export const requests = {
  fetchNowPlaying: '/movie/now_playing',
  fetchTrending: '/trending/all/week',
  fetchTopRated: '/movie/top_rated',
  fetchActionMovies: '/discover/movie?with_genres=28',
  fetchComedyMovies: '/discover/movie?with_genres=35',
  fetchHorrorMovies: '/discover/movie?with_genres=27',
  fetchRomanceMovies: '/discover/movie?with_genres=10749',
  fetchDocumentaries: '/discover/movie?with_genres=99',
};
