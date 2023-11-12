import { StyledMovies } from '../../Movies.styled';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

const Navigation = () => {
  const { movieId } = useParams();
  return (
    <StyledMovies>
      <div className="additionalTitle">
        <h3>Additional information</h3>
        <NavLink className="header-link" to={`/movies/${movieId}/cast`}>
          Cast
        </NavLink>
        <NavLink className="header-link" to={`/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </StyledMovies>
  );
};

export default Navigation;
