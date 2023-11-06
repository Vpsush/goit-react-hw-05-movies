import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MoviesPageDetails from './pages/MoviesPageDetails';
import PageActors from './pages/PageActors';
import PageReviews from './pages/PageRewies';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/movies/get-movie-details">Movies details</NavLink>
        <NavLink to="/movies/get-movie-credits">Movies actors</NavLink>
        <NavLink to="/movies/get-movie-reviews">Movies reviews</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route
            path="/movies/get-movie-details"
            element={<MoviesPageDetails />}
          ></Route>
          <Route
            path="/movies/get-movie-credits"
            element={<PageActors />}
          ></Route>
          <Route
            path="/movies/get-movie-reviews"
            element={<PageReviews />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
};
