import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { StyledMovies } from '../Movies.styled';
import Loader from '../components/Loader/Loader';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
import { API_KEY } from '../additional/const';

// const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log(location);

  const queryValue = searchParams.get('query');

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!queryValue) return;
    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${queryValue}&api_key=${API_KEY}`
        );

        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchMovies();
  }, [queryValue]);

  return (
    <StyledMovies>
      <form className="SearchForm" onSubmit={onFormSubmit}>
        <label>
          <input
            type="text"
            required
            placeholder="Search movies"
            name="searchKey"
          />
        </label>
        <button type="submit" className="SearchFormButton"></button>
      </form>
      {isLoading && <Loader />}
      {error && <p className="error">Error: {error}</p>}
      {movieDetails && (
        <div>
          <h1>Search Results</h1>
          <ul>
            {movieDetails.results.map(movie => (
              <li key={movie.id}>
                <Link state={{ form: location }} to={`/movies/${movie.id}`}>
                  {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
          {/* <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes> */}
        </div>
      )}
    </StyledMovies>
  );
};

export default Movies;
