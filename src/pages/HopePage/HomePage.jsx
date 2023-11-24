import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchDayMovies } from 'additional/function';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getDayMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchDayMovies();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getDayMovies();
  }, []);

  // useEffect(() => {
  //   fetchDayMovies('').then(({ movie }) => {
  //     setMovie(movie);
  //     setIsLoading(false);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetchDayMovies('').then(setMovie);
  // }, []);

  return (
    <div>
      <div>
        {isLoading && <Loader />}
        {/* {error && <p>Error: {error}</p>} */}
        <MoviesList movie={movie} />
      </div>
    </div>
  );
};

export default Home;
