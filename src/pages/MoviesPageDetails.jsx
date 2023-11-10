import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
// import PageActors from './PageActors';
// import PageRewies from './PageRewies';

// const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const MoviesPageDetails = () => {
  const { movieId } = useParams();
  const { movieDetails, setMovieDetails } = useState('null');
  const { isLoading, setIsLoading } = useState('false');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`
        );
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId, setIsLoading, setMovieDetails]);

  return (
    <div>
      <h1>Movie Details</h1>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <h2>{movieDetails.title}</h2>
          <p>Rating: {Math.round(movieDetails.vote_average)}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </p>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <NavLink className="header-link" to={`/movies/${movieId}/cast`}>
          Cast
        </NavLink>
        <NavLink className="header-link" to={`/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
      </div>
      {/* <Routes>
        <Route path=":movieId/cast" element={<PageActors />} />
        <Route path=":movieId/reviews" element={<PageRewies />} />
      </Routes> */}
    </div>
  );
};
export default MoviesPageDetails;
