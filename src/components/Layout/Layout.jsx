import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <ul className="title">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </ul>
  );
};
export default Layout;
