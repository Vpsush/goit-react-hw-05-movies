import { Component } from 'react';
import axios from 'axios';

const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export default class Home extends Component {
  state = {
    movies: null,
    reviews: null,
    moviesId: null,
    isLoading: false,
    error: null,
  };

  fetchMovies = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(`&key=${API_KEY}`);
      this.setState({ movies: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    return <h1>Tranding today</h1>;
  }
}
