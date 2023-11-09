// import { NavLink, Route, Routes } from 'react-router-dom';
// import Home from 'pages/HomePage';
// import Movies from 'pages/MoviesPage';
// import MoviesPageDetails from 'pages/MoviesPageDetails';
// import Cast from 'pages/PageActors';
// import Reviews from 'pages/PageRewies';
// import { StyledMovies } from './Movies.styled';

// export const App = () => {
//   return (
//     <StyledMovies>
//       <div>
//         <ul className="title">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/movies">Movies</NavLink>
//           </li>
//           {/* <NavLink to="/movies/:movieId">Movies details</NavLink>
//         <NavLink to="/movies/:movieId/cast">Cast</NavLink>
//         <NavLink to="/movies/:movieId/reviews">Reviews</NavLink> */}
//         </ul>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/movies" element={<Movies />}>
//               <Route path=":movieId/cast" element={<Cast />}></Route>
//               <Route path=":movieId/reviews" element={<Reviews />}></Route>
//             </Route>
//             <Route
//               path="/movies/:movieId"
//               element={<MoviesPageDetails />}
//             ></Route>
//           </Routes>
//         </main>
//       </div>
//     </StyledMovies>
//   );
// };

import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'pages/HomePage';
import Movies from 'pages/MoviesPage';
import MoviesPageDetails from 'pages/MoviesPageDetails';
import Cast from 'pages/PageActors';
import Reviews from 'pages/PageRewies';
import { StyledMovies } from '../Movies.styled';

export const App = () => {
  return (
    <StyledMovies>
      <div>
        <ul className="title">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />}>
              <Route path=":movieId/cast" element={<Cast />} />
              <Route path=":movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="/movies/:movieId" element={<MoviesPageDetails />} />
          </Routes>
        </main>
      </div>
    </StyledMovies>
  );
};
