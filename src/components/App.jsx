import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { StyledApp } from '../components/App.styled';
import Loader from './Loader/Loader';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/HopePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
const MoviesPageDetails = lazy(() =>
  import('pages/MoviesPageDetails/MoviesPageDetails')
);

export const App = () => {
  return (
    <StyledApp>
      <div className="header">
        {/* <ul className="title">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul> */}
        <Layout />
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MoviesPageDetails />}>
                <Route path="/movies/:movieId/cast" element={<Cast />} />
                <Route path="/movies/:movieId/reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </StyledApp>
  );
};
