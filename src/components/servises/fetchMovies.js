import axios from 'axios';

const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const fetchMovies = async query => {
  try {
    const { data } = await axios.get(`/?q=${query}&key=${API_KEY}&`);

    if (data.hits.length === 0) {
      return {
        error: `No results found for "${query}"`,
        images: [],
      };
    }

    return {
      error: null,
      images: data.hits,
    };
  } catch (error) {
    return {
      error,
      images: [],
    };
  }
};
