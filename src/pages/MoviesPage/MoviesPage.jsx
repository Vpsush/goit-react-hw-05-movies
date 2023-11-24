import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { StyledMoviesPage } from '../../pages/MoviesPage/MoviesPageStyled';
import Loader from '../../components/Loader/Loader';
import { searchMovie } from 'additional/function';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const queryValue = searchParams.get('query');

  const onFormSubmit = async e => {
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

        const data = await searchMovie(queryValue);
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
    <StyledMoviesPage>
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
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledMoviesPage>
  );
};

export default Movies;
