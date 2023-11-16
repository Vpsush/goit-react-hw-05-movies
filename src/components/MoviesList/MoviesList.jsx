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

import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchDayMovies } from 'additional/function'; // Assuming this path is correct
// import { BASE_URL, API_KEY } from 'additional/const';

const MoviestList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null); // Reset error on each fetch
        const data = await fetchDayMovies(); // Use the function from fetchFunctions.js
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure it runs only once on mount

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
};

export default MoviestList;
