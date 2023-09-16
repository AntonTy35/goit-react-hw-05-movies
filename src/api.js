import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e5720262ef788a357c4847198d11621a';

export const getTrendingList = async () => {
  const response = await axios.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovies = async movieName => {
  const response = await axios.get(
    `/search/movie?query=${movieName}&language=en-US&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getMovieById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieCasts = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}&page=1`
  );
  return response.data;
};
