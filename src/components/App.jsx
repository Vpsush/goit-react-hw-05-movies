import { lazy, Suspense } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
// import Home from 'pages/HomePage';
// import Movies from 'pages/MoviesPage';
// import MoviesPageDetails from 'pages/MoviesPageDetails';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
import { StyledMovies } from '../Movies.styled';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage'));
const Reviews = lazy(() => import('pages/Reviews'));
const Cast = lazy(() => import('pages/Cast'));
const MoviesPageDetails = lazy(() => import('pages/MoviesPageDetails'));

export const App = () => {
  return (
    <StyledMovies>
      <div className="header">
        <ul className="title">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movies" element={<Movies />}></Route>
              <Route path="/movies/:movieId" element={<MoviesPageDetails />}>
                <Route path="/movies/:movieId/cast" element={<Cast />} />
                <Route path="/movies/:movieId/reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </StyledMovies>
  );
};
