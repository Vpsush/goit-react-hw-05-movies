import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { NavLink, Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import PageActors from './PageActors';
import PageRewies from './PageRewies';

// const API_KEY = 'c22cf15536964c1cf38cb65c76fb41a1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const MoviesPageDetails = () => {
  const { movieId } = useParams();
  const { movieDetails, setMovieDetails } = useState('null');
  const { isLoading, setIsLoading } = useState('false');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
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
          {movieDetails.original_title}
          Rating: {Math.round(movieDetails.vote_average)}
          Overview
          {movieDetails.overview}
          Genres
          {movieDetails.genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <NavLink className="header-link" to=":movieId/cast">
          Cast
        </NavLink>
        <NavLink className="header-link" to=":movieId/reviews">
          Cast
        </NavLink>
      </div>
      <Routes>
        <Route path=":movieId/cast" element={<PageActors />} />
        <Route path=":movieId/reviews" element={<PageRewies />} />
      </Routes>
    </div>
  );
};
export default MoviesPageDetails;
