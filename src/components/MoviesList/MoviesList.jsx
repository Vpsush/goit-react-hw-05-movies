import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDayMovies } from 'additional/function';
import { StyledMovies } from './StyledMovies';

const MoviestList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchDayMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledMovies>
      <div>
        <h1 className="titleToday">Trending today</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  // state={{ from: location}}
                >
                  {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledMovies>
  );
};

export default MoviestList;
