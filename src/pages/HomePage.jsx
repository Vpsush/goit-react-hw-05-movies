import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import MoviesPageDetails from './MoviesPageDetails';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'additional/const';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';

const Home = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchDayMovies = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setMovie(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDayMovies();
  }, [movieId]);

  return (
    <div>
      <div>
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        {/* <NavLink to="movies/:movieId"> */}
        <MoviesList movie={movie} />
        {/* </NavLink> */}
      </div>
      {/* <Routes>
        <Route path="movies/:movieId" element={<MoviesPageDetails />}></Route>
      </Routes> */}
    </div>
  );
};

export default Home;
