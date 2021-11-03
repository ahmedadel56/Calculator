import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components-style/Nav.css';

const Nav = () => (
  <header className="headerContainer">
    <h1>Math Magicians</h1>
    <div>
      <NavLink to="/" className="link" activeClassName="is-active" exact>
        Home
      </NavLink>
      <NavLink to="/calculator" className="link" activeClassName="is-active">
        Calculator
      </NavLink>
      <NavLink to="/quotes" className="link" activeClassName="is-active">
        Quotes
      </NavLink>
    </div>
  </header>
);

export default Nav;
