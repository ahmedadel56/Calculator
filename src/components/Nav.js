import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import '../components-style/Nav.css';

const Nav = () => (
  <header className="headerContainer" data-testid="Nav">
    <h1>Math Magicians</h1>
    <div>
      <BrowserRouter>
        <NavLink to="/" className="link" activeClassName="is-active" exact>
          Home
        </NavLink>
        <NavLink to="/calculator" className="link" activeClassName="is-active">
          Calculator
        </NavLink>
        <NavLink to="/quotes" className="link" activeClassName="is-active">
          Quotes
        </NavLink>
      </BrowserRouter>
    </div>
  </header>
);

export default Nav;
