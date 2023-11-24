import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Navigation from '../../components/Navigation/Navigation';
import { StyledMoviesPageDetails } from '../../pages/MoviesPageDetails/MoviesPageDetails.styled';
import { defaultImg } from '../../additional/const';
import { fetchMoviesDetails } from '../../additional/function';

const MoviesPageDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '*';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const movieById = await fetchMoviesDetails(movieId);
        setMovieDetails(movieById);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <StyledMoviesPageDetails>
      <div>
        <button className="return">
          <Link to={backLinkHref}>Go back</Link>
        </button>

        {error !== null && <p className="error-bage">{error}</p>}
        {isLoading && <Loader />}
        {movieDetails !== null && (
          <div className="info">
            <div>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`
                    : defaultImg
                }
                alt={movieDetails.title}
              />
            </div>
            <div>
              <h2>{movieDetails.title}</h2>
              <p>Rating: {Math.round(movieDetails.vote_average)}</p>
              <h2>Overview</h2>
              <p>{movieDetails.overview}</p>
              <h2>Genres</h2>
              <ul>
                {movieDetails.genres?.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Navigation />
      </div>
    </StyledMoviesPageDetails>
  );
};

export default MoviesPageDetails;
