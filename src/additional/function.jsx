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
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const fetchDayMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const fetchMoviesDetails = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return data;
};
