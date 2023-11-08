import MoviestList from 'components/MoviesList';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import MoviesPageDetails from './MoviesPageDetails';

const Home = () => {
  return (
    <div>
      <div>
        <NavLink to="movies/:movieId">
          <MoviestList />
        </NavLink>
      </div>
      <Routes>
        <Route path="movies/:movieId" element={<MoviesPageDetails />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
