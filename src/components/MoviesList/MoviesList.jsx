// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default class MoviesList extends Component {
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
//         <h1 className="titleToday">Trending today</h1>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error: {error}</p>}
//         {movies && (
//           <ul>
//             {movies.map(movie => (
//               <li key={movie.id}>
//                 <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'additional/const';

const MoviesList = () => {
  // state = {
  //   movies: [],
  //   isLoading: false,
  //   error: null,
  // };
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  // componentDidMount() {
  //   this.fetchMovies();
  // }
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          `trending/movie/day?language=en-US&api_key=${API_KEY}`
        );
        setMovie(data.movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <h1 className="titleToday">Trending today</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movie && (
        <ul>
          {movie.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;
