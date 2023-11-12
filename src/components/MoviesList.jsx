// import React, { Component } from 'react';
// import axios from 'axios';

// const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export default class MoviestList extends Component {
//   state = {
//     movies: [],
//     isLoading: false,
//     error: null,
//   };

//   componentDidMount() {
//     this.fetchMovies();
//   }

//   fetchMovies = async () => {
//     try {
//       this.setState({ isLoading: true });
//       const { data } = await axios.get(
//         `trending/movie/day?language=en-US&api_key=${API_KEY}`
//       );
//       this.setState({ movies: data.results });
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   render() {
//     const { movies, isLoading, error } = this.state;

//     return (
//       <div>
//         <h1>Trending today</h1>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error: {error}</p>}
//         {movies && (
//           <ul>
//             {movies.map(movie => (
//               <li key={movie.id}>{movie.original_title}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default class MoviestList extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        `trending/movie/day?language=en-US&api_key=${API_KEY}`
      );
      this.setState({ movies: data.results });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <div>
        <h1 className="titleToday">Trending today</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
