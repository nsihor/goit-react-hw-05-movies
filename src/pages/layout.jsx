import { Outlet, NavLink } from 'react-router-dom';
import { Header, Nav, Footer } from './layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <h1>Movies Center</h1>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Nav>
      </Header>
      <Outlet />
      <Footer>
        <p>
          Created by <a href="https://github.com/nsihor">Ihor</a>
        </p>
      </Footer>
    </>
  );
};

export default Layout;
