'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'



const Navbar = () => {

  return (
    <navbar>
      <section>
        <h4 className="menu-item active nav-item nav-link">
          <Link to="/albums">Albums</Link>
        </h4>
        <h4 className="menu-item active nav-item nav-link">
          <Link to="/artists">Artists</Link>
        </h4>
        <h4 className="menu-item active nav-item nav-link">
          <Link to="/songs">Songs</Link>
        </h4>
        <h4 className="menu-item active nav-item nav-link">
          <Link to="/cart">Cart</Link>
        </h4>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </section>
    </navbar>
  );
};

export default Navbar;
