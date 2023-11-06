import React, { Component } from 'react';
import axios from 'axios';

// c22cf15536964c1cf38cb65c76fb41a1;

export default class MoviesPage extends Component {
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
      const { data } = await axios.get('https://api.themoviedb.org/');
      this.setState({ movies: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return <div>Movies</div>;
  }
}
