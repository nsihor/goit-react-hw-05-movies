import { Outlet, NavLink } from 'react-router-dom';
import { Header, Nav, Footer } from './layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <h1>Movies Center</h1>
        <Nav>
          <NavLink to="/goit-react-hw-05-movies">Home</NavLink>
          <NavLink to="/goit-react-hw-05-movies/movies">Movies</NavLink>
        </Nav>
      </Header>
      <Outlet />
      <Footer>
        <p>
          Created by{' '}
          <a target="_blank" href="https://github.com/nsihor" rel="noreferrer">
            Ihor
          </a>
        </p>
      </Footer>
    </>
  );
};

export default Layout;
