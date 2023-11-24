import axios from 'axios';
import { API_KEY, BASE_URL } from 'additional/const';

export const fetchActors = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const fetchReview = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};

export const fetchDayMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const fetchMoviesDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const searchMovie = async queryValue => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${queryValue}&api_key=${API_KEY}`
  );
  return data;
};
