import { NavLink } from 'react-router-dom';
import { StyledLayout } from '../Layout/Loader.styled';

const Layout = () => {
  return (
    <StyledLayout>
      <ul className="title">
        <li className="titleBtn">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="titleBtn">
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </StyledLayout>
  );
};
export default Layout;
